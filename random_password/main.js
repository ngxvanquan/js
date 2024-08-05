const btn = document.querySelector('.btn');
const password = document.querySelector('.password');

btn.addEventListener('click', () => {
    password.textContent = randomPassword();
});

const randomPassword = () => {
    const length = 16;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i <= length; i++) {
        result += charset.charAt(Math.floor(Math.random() * length));
    }

    return result;
};

function copyText() {
    var value = password.innerHTML;

    navigator.clipboard.writeText(value);

    alert('Copied the text: ' + value);
}
