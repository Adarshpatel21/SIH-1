# NeuroSync — Memory Journey

A browser-based reminiscence question game designed for older adults. It asks a maximum of 5 questions per session, uses text-to-speech for questions and speech-to-text for answers, automatically advances after a spoken answer ends, and creates a PDF session report.

## Included
- Brown + white, large-text, high-contrast UI.
- NeuroSync at top-left and patient profile at top-right.
- 50 reminiscence questions spanning food, family, travel, music, school, work, festivals, friends, childhood, wisdom and joyful time-travel prompts.
- Maximum 5 questions/session.
- Skip button on every question.
- Browser SpeechSynthesis for question playback.
- Browser SpeechRecognition for spoken answers, with graceful typed-answer fallback.
- Automatic progression: once speech recognition ends after a final answer, the answer is recorded and the Next button becomes available.
- Adaptive AI endpoint using OpenAI Responses API. It scores recall richness/engagement for game adaptation only and moves difficulty between Gentle, Memory and Deep memory. It is explicitly non-diagnostic.
- PDF report with answered/skipped counts, average response time, per-question responses and an observable slow-response percentage.
- English and Hindi question text are included. Assamese, Bengali, Manipuri, Khasi, Mizo and Bodo language selectors are included as browser speech locales; the question dictionary is structured so verified native-speaker translations can be added without changing the game engine.

## Run
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and add your OpenAI API key if AI adaptation is desired.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000` in Chrome/Edge.

Without an API key, the app still works and uses a local heuristic fallback for difficulty adaptation.

## AI design
The backend calls the OpenAI Responses API from the server so the API key is not exposed in browser JavaScript. The AI returns strict JSON: recallRichness, engagement, suggestedDifficulty, gentleFollowup and reason. The game uses only suggestedDifficulty; it does not diagnose the patient. Session-summary generation is also non-diagnostic.

## Important clinical/product note
The “nervousness” field in the report is intentionally labeled a **slow-response observation**. Long pauses or long answer times can have many causes, so the metric must not be presented as anxiety, dementia severity, or a medical diagnosis. For a clinical product, validate all scoring with qualified clinicians and usability testing.
