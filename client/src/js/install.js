const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser prompt
    event.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = event;
    // Update UI or notify the user that the app can be installed
    // (e.g., show a custom install button)
    butInstall.style.display = 'block';
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the browser install prompt
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      // Handle the result (result.outcome will be 'accepted' or 'dismissed')
      console.log('User choice:', result.outcome);
      // Clear the deferredPrompt variable as it's a one-time event
      deferredPrompt = null;
      // Hide the install button
      butInstall.style.display = 'none';
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // The PWA was successfully installed
    console.log('App installed:', event);
});
