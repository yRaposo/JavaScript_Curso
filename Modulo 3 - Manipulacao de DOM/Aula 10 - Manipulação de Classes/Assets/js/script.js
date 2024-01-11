let Listener = document.querySelector('button')

Listener.addEventListener("click", () => {
    const button = document.querySelector('button');

    button.classList.add('confirm');

    button.classList.remove('verde');

    //liga ou desliga uma classe
    button.classList.toggle('Ligado')

    button.classList.replace('button', 'botão')

    console.log(button.classList);
})