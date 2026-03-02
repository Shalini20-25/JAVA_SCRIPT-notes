const quotes = [
  "Honesty is the best policy",
  "The only way to do great work is to love what you do",
  "Innovation distinguishes between a leader and a follower",
  "Life is what happens when you're busy making other plans",
  "The future belongs to those who believe in the beauty of their dreams",
  "It is during our darkest moments that we must focus to see the light",
  "Success is not final, failure is not fatal: it is the courage to continue that counts",
  "The only impossible thing is that which you don't attempt"
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index];
});
