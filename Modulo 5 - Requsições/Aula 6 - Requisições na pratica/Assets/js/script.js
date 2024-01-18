// https://jsonplaceholder.typicode.com/posts

const click = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json[0].title);
    })
}

document.querySelector('button').addEventListener('click', click)