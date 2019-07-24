window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('https://freevuehub.github.io/sw.js');
  }
});
