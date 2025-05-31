const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("new-quote");

    let lastIndex = Math.floor(Math.random() * quotes.length);
    showQuote(lastIndex);

    button.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    showQuote(randomIndex);
    });

    function showQuote(index) {
        quoteText.textContent = `"${quotes[index].text}"`;
        authorText.textContent = `– ${quotes[index].author}`;
    }