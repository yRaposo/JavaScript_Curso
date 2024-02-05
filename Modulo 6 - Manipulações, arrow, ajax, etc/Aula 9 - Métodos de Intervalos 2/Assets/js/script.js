let timer

const rodar = () => {
    timer = setTimeout( function () {
        alert('rodo');
    }, 1000);
}

function parar() {
    clearTimeout(timer);
}