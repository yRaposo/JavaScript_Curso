let Listener = document.querySelector('#EventListener')

Listener.addEventListener("click", () => {
    const input = document.querySelector('input');
    
    //Com o getAttribute, podemos quais atributos existem no elemento
    console.log(input.getAttribute('placeholder'));

    //Com o hasAttribute, podemos ver se existe um determinado atributo no elemento
    console.log(input.hasAttribute('placeholder'));

    //Com o setAttribute, podemos criar, ou modificar o atributo no elemento
    input.setAttribute('placeholder', 'Digite aqui');
})