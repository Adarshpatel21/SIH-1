/* Add your Supabase project values from Project Settings > API. */
const SUPABASE_URL = 'https://ywyxrobvaxjgazkimapc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hQwKCfyA2Ubr0jWGz1paEg_aedE0W2Q';

const supabaseConfigured = !SUPABASE_URL.includes('YOUR_PROJECT_REF') &&
  !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY');

const neuroSyncSupabase = supabaseConfigured
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

window.neuroSyncSupabase = neuroSyncSupabase;
window.supabaseConfigured = supabaseConfigured;

async function saveSupabaseLogin(user) {
  if (!neuroSyncSupabase) return;

  const { error } = await neuroSyncSupabase.from('login_history').insert({
    user_id: user.id,
    email: user.email,
    role: user.user_metadata?.role || 'family'
  });
  if (error) throw error;
}

async function saveSupabaseHydration(amount) {
  if (!neuroSyncSupabase) return;

  const userResult = await neuroSyncSupabase.auth.getUser();
  if (!userResult.data.user) throw new Error('No signed-in Supabase user found.');

  const { error } = await neuroSyncSupabase.from('hydration_logs').insert({
    user_id: userResult.data.user.id,
    glasses: amount
  });
  if (error) throw error;
}

async function saveSupabaseMedication(name, taken) {
  if (!neuroSyncSupabase) return;

  const userResult = await neuroSyncSupabase.auth.getUser();
  if (!userResult.data.user) throw new Error('No signed-in Supabase user found.');

  const { error } = await neuroSyncSupabase.from('medication_logs').insert({
    user_id: userResult.data.user.id,
    medication_name: name,
    taken
  });
  if (error) throw error;
}

async function saveSupabaseGameScore({ gameName = 'Memory Match', moves, time, score, metadata = {} }) {
  if (!neuroSyncSupabase) return;

  const userResult = await neuroSyncSupabase.auth.getUser();
  if (!userResult.data.user) throw new Error('No signed-in Supabase user found.');

  const { error } = await neuroSyncSupabase.from('game_scores').insert({
    user_id: userResult.data.user.id,
    game_name: gameName,
    moves,
    time_seconds: time,
    score,
    metadata
  });
  if (error) throw error;
}
