const Up = (e) => {
    if (e.key === 'Enter') {
        const input = document.querySelector('input');
        const ul = document.querySelector('ul');
        
        ul.innerHTML += `<li>${input.value}</li>`;
    }
}

document.addEventListener('keyup', Up);