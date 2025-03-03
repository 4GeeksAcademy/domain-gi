import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let domain = document.getElementById("domain");
const button = document.querySelector ("#generar");

const pronoun = ['the', 'the','the','domain'];
const adj = ['reward', 'Ebook','masterclass','proyection'];
const noun = ['center', 'reward' , 'online','times' ];

function generateDomain() {
  let domain = "";
  
  pronoun.forEach(p =>
    adj.forEach(a =>
      noun.forEach(n => {
        domain += `<li class="list-group-item">${p}${a}${n}.com</li>`;
      })
    )
  );

  console.log(domain); 
  return domain; 
  
}
window.onload = function() {
  
  button.addEventListener("click",function(){
  domain.innerHTML = generateDomain();

});
};

console.log(""); 