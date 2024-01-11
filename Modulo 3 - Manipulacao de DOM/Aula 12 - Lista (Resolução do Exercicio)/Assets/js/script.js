const Up = (e) => {

    //Caso o Enter seja precionado
    if (e.key === 'Enter') {

        //Obtenção dos elementos
        const ul = document.querySelector('ul');
        const newLi = document.createElement('li');
        
        //Criação do novo elemento na lista
        newLi.innerHTML = input.value;
        ul.appendChild(newLi);
        
        //Input esvaziado
        input.value = '';
    }
}

//Obtenção de input e captura de eventos
const input = document.querySelector('input');
input.addEventListener('keyup', Up);