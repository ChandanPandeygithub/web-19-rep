// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import navbar from "../components/navbar.js";
// document.querySelector("#navbar").innerHTML = navbar();

let country = document.querySelector("#sidebar");
let button = document.querySelector("#btn");
button.addEventListener("click",getdata)
async function getdata() {
    let inputt = document.querySelector("#search-input").value;
  let urll = `https://masai-api.herokuapp.com/news?q=${inputt}`;
  let response = await fetch(urll);
  let data = await response.json();
  console.log(data);
}