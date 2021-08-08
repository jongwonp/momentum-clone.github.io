const quotes = [
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: ""
    },
    {
        quote: "오늘은 어제 죽은 사람이 그토록 원하던 내일이다",
        author: ""
    },
    {quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
    author:""
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;

author.innerText = todaysQuote.author;