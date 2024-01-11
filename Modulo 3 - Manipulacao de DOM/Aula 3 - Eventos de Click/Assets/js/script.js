const apertou = () => {
    alert("Apertou no botão com onClick");
};

let Listener = document.querySelector('#EventListener')

Listener.addEventListener("click", () => alert("Apertou no botão com EventListener"))