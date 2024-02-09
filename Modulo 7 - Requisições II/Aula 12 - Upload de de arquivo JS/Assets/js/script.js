let enviar = async () => {
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Bla');
    body.append('arquibo', arquivo);

    let req = await fetch('https://UgaBunga.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}