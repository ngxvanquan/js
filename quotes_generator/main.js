const quotesString = `You must be the change you wish to see in the world. -Mahatma Gandhi, Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa, The only thing we have to fear is fear itself. -Franklin D. Roosevelt, Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr. , Do one thing every day that scares you. -Eleanor Roosevelt, Well done is better than well said. -Benjamin Franklin, The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart. -Helen Keller, It is during our darkest moments that we must focus to see the light. -Aristotle, Do not go where the path may lead go instead where there is no path and leave a trail. -Ralph Waldo Emerson, Be yourself; everyone else is already taken. -Oscar Wilde`;

const btn = document.querySelector('.btn');
const blockQuote = document.querySelector('.block-quote');
const author = document.querySelector('.author');

const quotesArray = quotesString.split(',');

let quotes = [];

for (let i = 0; i < quotesArray.length; i++) {
    const quote = quotesArray[i];
    let temp = quote.split('-');
    quotes[i] = {
        quoteContent: temp[0],
        quoteAuthor: temp[1],
    };
}

console.log(quotes);

btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    blockQuote.textContent = `
        ${quotes[randomNumber].quoteContent}
    `;
    const quoteWidth = blockQuote.offsetWidth;
    author.style.marginLeft = `${quoteWidth - 100}px`;
    author.textContent = `-${quotes[randomNumber].quoteAuthor}`;
});
