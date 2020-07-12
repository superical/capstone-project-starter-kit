/**
 * If you want to enable PWA offline capabilities and experience,
 * please make sure you set window.DISABLE_SERVICE_WORKER = false
 */
window.DISABLE_SERVICE_WORKER = true;     // Set this to false to register service worker

if ('serviceWorker' in navigator) {
  if (window.DISABLE_SERVICE_WORKER) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  } else {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
    });
  }
}
