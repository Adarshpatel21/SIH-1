let pictureRecallScoreSaved = false;

function savePictureRecallScore() {
  const statusElement = document.getElementById('supabaseSaveStatus');
  if (!window.supabaseConfigured) {
    statusElement.textContent = 'Supabase is not configured.';
    return;
  }
  if (pictureRecallScoreSaved) return;

  const answered = state.results.filter((result) => result && !result.skipped);
  const skipped = state.results.filter((result) => result && result.skipped);
  const averageTime = answered.length
    ? answered.reduce((total, result) => total + result.time, 0) / answered.length
    : 0;
  const score = answered.length * 20;
  const metadata = {
    patient: state.patient,
    results: state.results,
    skipped: skipped.length,
    slowResponseObservation: answered.length
      ? Math.round(answered.filter((result) => result.time > 25).length / answered.length * 100)
      : 0
  };

  pictureRecallScoreSaved = true;
  statusElement.textContent = 'Saving score...';
  saveSupabaseGameScore({
    gameName: 'Picture Recall',
    moves: answered.length,
    time: Math.round(averageTime),
    score,
    metadata
  }).then(() => {
    statusElement.textContent = 'Score saved to your account.';
  }).catch((error) => {
    pictureRecallScoreSaved = false;
    statusElement.textContent = `Score was not saved online: ${error.message}`;
    console.error('Picture Recall score save failed:', error);
  });
}

const pictureRecallReport = document.getElementById('reportModal');
if (pictureRecallReport) {
  new MutationObserver(() => {
    if (!pictureRecallReport.classList.contains('hidden')) {
      savePictureRecallScore();
    }
  }).observe(pictureRecallReport, { attributes: true, attributeFilter: ['class'] });
}
