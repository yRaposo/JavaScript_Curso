// https://jsonplaceholder.typicode.com/posts

const click = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    }).then((json) => {
        alert(json[0].title);
    }).catch((error) => {
        console.log("Deu Problema: " + error);

        alert('Deu erro')
    }).finally(() => {
        alert('final da requisição');
    })
    
}


document.querySelector('button').addEventListener('click', click)