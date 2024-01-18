// https://jsonplaceholder.typicode.com/posts
/*
Get - Recebe dados
Post - Envia dados
Put - Atualiza dados
Delete - Deleta dados
*/

const click = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(json[0].title + ` Status: ${json.status}`);
    })
    .catch((error) => {
        console.log("Deu Problema: " + error);
        alert(`Deu erro Status: ${json.status}`)
    })
    .finally(() => {
        alert('final da requisição');
    })
    
}

const inserir = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: ' Corpo de teste',
            userId: 2
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
}

document.querySelector('#botao').addEventListener('click', click);
document.querySelector('#Inserir').addEventListener('click', inserir);