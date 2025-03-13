const btn = document.querySelector(".btn");
const div = document.querySelector(".div-close")
btn.addEventListener("click", ()=>{
    if(btn.innerHTML = "open"){
    div.classList.toggle("open")
    btn.innerHTML = "close";
    }
    else{
     div.classList.toggle("open")
     btn.innerHTML = "open";
    }
})