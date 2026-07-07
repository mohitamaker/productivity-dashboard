let API_KEY = "0co8nJX2b2czCq2qFX6b2EWj41HRreLoAVa5aIBd";

let url="https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";
let quotecard = document.querySelector(".quote-card");
let quotePlace = document.querySelector("#quote");
let authorPlace = document.querySelector("#author");
let quoteButtons = document.querySelector(".quote-buttons");
let copytoast= document.querySelector(".copy-toast");
async function getData(url){
    let response = await fetch(url, {
        headers: {
            "X-Api-Key": API_KEY
        }
    });
    let data = await response.json();
    console.log(data);
    displayQuote(data[0].quote,data[0].author);
}
getData(url);
function displayQuote(quote,author){
    quotePlace.innerText = quote;
    authorPlace.innerText = author;
}
quoteButtons.addEventListener('click',(e)=>{
    if(e.target.closest("#newQuote")){
        getData(url);
    }
    if(e.target.closest("#copyQuote")){
        navigator.clipboard.writeText(quotePlace.innerText+" - "+authorPlace.innerText);
        copytoast.style.opacity=1;
        setTimeout(()=>{
            copytoast.style.opacity=0;
        },1000);
        // notification("Quote copied to clipboard!");
    }
})