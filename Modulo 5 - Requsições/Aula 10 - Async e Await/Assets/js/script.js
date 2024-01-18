// https://jsonplaceholder.typicode.com/posts
/*
Funções normais:

async function click(){};

Arrow function:

const click = async () => {};
*/



const click = async () => {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    alert($json[0].title);
}

const inserir = async () => {
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: ' Corpo de teste',
                userId: 2
            })
        });
    let json = await response.json();

    console.log(json);
}

document.querySelector('#botao').addEventListener('click', click);
document.querySelector('#Inserir').addEventListener('click', inserir);