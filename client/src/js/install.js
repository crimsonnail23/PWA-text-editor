const butInstall = document.getElementById('buttonInstall');
console.log('ln 2')
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('ln 6')
    event.preventDefault();
    butInstall.style.visbility='visible';

    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent= "installed!";
    });
});

    // TODO: Add an handler for the `appinstalled` event
    window.addEventListener('appinstalled', (event) => {
        console.log('appinstalled', event);
    });
