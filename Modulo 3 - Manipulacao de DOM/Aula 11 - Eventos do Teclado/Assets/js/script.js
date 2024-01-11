const Down = () => {
    console.log('Apertou');
};

const Hold = () => {
    console.log('Segurou');
};

const Up = (e) => {
    console.log('tecla', e.code);
    console.log('shift', e.shiftKey);
};

const input = document.querySelector('input');
input.addEventListener('keyup', Up);