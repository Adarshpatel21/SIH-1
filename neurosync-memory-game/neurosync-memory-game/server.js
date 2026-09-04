import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.json({limit:'1mb'}));
app.use(express.static(path.join(__dirname,'public')));

const client = process.env.OPENAI_API_KEY ? new OpenAI({apiKey: process.env.OPENAI_API_KEY}) : null;

app.post('/api/adapt', async (req,res)=>{
  const {question, answer, language='en-IN', difficulty=1, history=[]} = req.body || {};
  if (!answer || !question) return res.status(400).json({error:'question and answer are required'});
  if (!client) return res.json(fallbackAdapt(answer,difficulty));
  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
      input: [
        {role:'system', content:[{type:'input_text', text:`You are an adaptive reminiscence-game assistant for older adults. This is NOT a diagnostic test. Evaluate the patient's response only for game adaptation. Be warm and conservative. Return JSON with: recallRichness (0-3), engagement (0-3), suggestedDifficulty (1-3), gentleFollowup (string, <=18 words), reason (<=20 words). Increase difficulty only when the response is coherent and engaged; otherwise keep or reduce it. Never infer dementia severity or make medical claims. Language: ${language}.`} ]},
        {role:'user', content:[{type:'input_text', text:JSON.stringify({question,answer,difficulty,history})}]}
      ],
      text:{format:{type:'json_schema',name:'adaptation',strict:true,schema:{type:'object',properties:{recallRichness:{type:'integer'},engagement:{type:'integer'},suggestedDifficulty:{type:'integer'},gentleFollowup:{type:'string'},reason:{type:'string'}},required:['recallRichness','engagement','suggestedDifficulty','gentleFollowup','reason'],additionalProperties:false}}}
    });
    const parsed = JSON.parse(response.output_text);
    parsed.suggestedDifficulty = Math.max(1,Math.min(3,parsed.suggestedDifficulty));
    return res.json(parsed);
  } catch (e) {
    console.error(e);
    return res.json(fallbackAdapt(answer,difficulty));
  }
});

app.post('/api/session-summary', async (req,res)=>{
  const {session, language='en-IN'} = req.body || {};
  if (!client) return res.json({summary:'Session completed. Review the response-time and engagement indicators in the report.'});
  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
      input: [{role:'system',content:[{type:'input_text',text:`Create a short, encouraging, non-diagnostic caregiver summary for a reminiscence game session. Do not diagnose dementia, anxiety, or nervousness. Mention response pace/engagement as observations only. Language: ${language}.`}]},{role:'user',content:[{type:'input_text',text:JSON.stringify(session)}]}]
    });
    res.json({summary:response.output_text});
  } catch(e){ res.json({summary:'Session completed. Review the objective session metrics in the report.'}); }
});

function fallbackAdapt(answer,difficulty){
  const words=answer.trim().split(/\s+/).filter(Boolean).length;
  const recallRichness=words>18?3:words>8?2:words>2?1:0;
  const engagement=words>6?2:words>1?1:0;
  return {recallRichness,engagement,suggestedDifficulty:recallRichness>=2?Math.min(3,difficulty+1):Math.max(1,difficulty),gentleFollowup:'Thank you. That sounds like a meaningful memory.',reason:'Heuristic fallback based on response length.'};
}

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(process.env.PORT || 3000,()=>console.log(`NeuroSync running on http://localhost:${process.env.PORT||3000}`));
