

const changColor = document.querySelector('#box');
const anyEventFire = document.querySelector('body');

let randomColor = () => {
    let rgb = [];

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    rgb.push(red, green, blue);

    changColor.style.backgroundColor = `rgb(${rgb})`;
};


anyEventFire.addEventListener('keyup', () => {
    randomColor();
});

anyEventFire.addEventListener('click', () => {
    randomColor();
});
