const button = document.getElementById('btn');

button.addEventListener('click', () => {
    let val = Number(button.innerHTML);
    button.innerHTML = val + 1;
})