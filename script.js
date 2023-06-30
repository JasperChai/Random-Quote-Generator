const quotes = [
  "They dont know me son - Jasper",
  "You are the only person that can make it work , and you are also the only person that can fuck this up - Jasper",
  "You should be a monster , an absolute monster , and then you should learn how to control it - Jasper"
]

function setQuote(){
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const quoteParts = randomQuote.split('-');
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `${quoteParts[1]}`;
}