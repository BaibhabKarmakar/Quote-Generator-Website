const api_url = "https://api.api-ninjas.com/v1/quotes?&X-api-key=csI78Md9AZgS/1UlLSy27w==yCasvZamV3gODE5c";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
}
getQuote(api_url);

function linkedIn() {
    window.open("https://www.linkedin.com/feed/?shareActive=true&text=" + quote.innerHTML + "   ---- by " + author.innerHTML);
}