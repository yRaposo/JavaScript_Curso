//https://jsonplaceholder.typicode.com/posts

const readPosts = async () => {

    let postArea = document.querySelector('.posts');
    postArea.innerHTML = '<div class="loading">Carregando...</div>';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if (json.length > 0) {
        postArea.innerHTML = '';

        for (let i in json) {

            let postHtml = `
            <div class="postField" style='background:${User(json[i].userId).bgColor}'>
                <div class='postHeader' style='color:${User(json[i].userId).titleColor}'>
                    <div>
                        <h1>${json[i].title}</h1>
                    </div>
                    <div class="postUser">
                        <h2>${User(json[i].userId).name}</h2>
                        <img src="${User(json[i].userId).img}" alt="">
                    </div>
                </div>
                <div class="postBody">
                    <p>${json[i].body}</p>
                </div>
            </div>
            `;

            postArea.innerHTML += postHtml
        }

    } else {
        postArea.innerHTML = 'Nenhum Post encontrado'
    }
}

    readPosts();

