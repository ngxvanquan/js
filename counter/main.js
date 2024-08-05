counter = 0;

const num = document.querySelector('.num');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

const render = (number) => {
    num.textContent = number;
};

decrease.addEventListener('click', () => {
    counter -= 1;
    render(counter);
});

reset.addEventListener('click', () => {
    counter = 0;
    render(counter);
});

increase.addEventListener('click', () => {
    counter += 1;
    render(counter);
});
