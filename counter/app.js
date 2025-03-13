const incre = document.querySelector(".in");
const reset = document.querySelector(".re");
const decre = document.querySelector(".de");
const h1 = document.getElementsByTagName("h1");

let counter = 0;
incre.addEventListener("click", ()=>{
   h1[0].innerHTML =  ++counter
})
reset.addEventListener("click", ()=>{
   counter = 0;
   h1[0].innerHTML = counter;
 })
decre.addEventListener("click", ()=>{
   h1[0].innerHTML =  --counter;
 })