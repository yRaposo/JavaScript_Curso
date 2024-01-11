let Listener = document.querySelector('#EventListener')

Listener.addEventListener("click", () => {
    const button = document.querySelector('button');

    button.style.color = '#F00';
    button.style.borderColor = '#F00';
})