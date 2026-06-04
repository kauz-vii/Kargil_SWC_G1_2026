const arr = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn6'),
    document.getElementById('btn9'),
    document.getElementById('btn8'),
    document.getElementById('btn7'),
    document.getElementById('btn4')
];

document.getElementById('btn5').addEventListener('click', () => {

    const values = arr.map(btn => btn.innerHTML);

    for(let i = 0; i < 8; i++) {
        arr[(i + 1) % 8].innerHTML = values[i];
    }
});