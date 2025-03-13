const btn = document.querySelectorAll(".btn");
const div = document.querySelector(".mydiv");

div.innerHTML = "";
document.body.addEventListener("keydown",(event)=>{
    switch(event.key){
    case "q":
        case "Q":
            btn[0].classList.toggle("active"); 
            div.innerHTML += btn[0].innerHTML;
            break;
          
    case "w":
        case "W":
            btn[1].classList.toggle("active");  
            div.innerHTML += btn[1].innerHTML;
            break;
    case "e":
        case "E":
            btn[2].classList.toggle("active");
            div.innerHTML += btn[2].innerHTML;
            break;
    case "r":
        case "R":
            btn[3].classList.toggle("active"); 
            div.innerHTML += btn[3].innerHTML;
            break;
    case "t":
        case "T":
            btn[4].classList.toggle("active"); 
            div.innerHTML += btn[4].innerHTML;
            break; 
    case "y":
        case "Y":
            btn[5].classList.toggle("active"); 
            div.innerHTML += btn[5].innerHTML;
            break;   
    case "U":
        case "u":
            btn[6].classList.toggle("active"); 
            div.innerHTML += btn[6].innerHTML;
            break;   
    case "i":
        case "I":
            btn[7].classList.toggle("active"); 
            div.innerHTML += btn[7].innerHTML;
            break;  
    case "o":
        case "O":
            btn[8].classList.toggle("active"); 
            div.innerHTML += btn[8].innerHTML;
            break;  
    case "p":
        case "P":
            btn[9].classList.toggle("active"); 
            div.innerHTML += btn[9].innerHTML;
            break;  
    case "a":
        case "A":
            btn[10].classList.toggle("active");
            div.innerHTML += btn[10].innerHTML; 
            break;  
    case "s":
        case "S":
            btn[11].classList.toggle("active"); 
            div.innerHTML += btn[11].innerHTML;
            break;
    case "d":
        case "D":
            btn[12].classList.toggle("active"); 
            div.innerHTML += btn[12].innerHTML;
            break;
    case "F":
        case "f":
            btn[13].classList.toggle("active");
            div.innerHTML += btn[13].innerHTML; 
            break;
    case "g":
        case "G":
            btn[14].classList.toggle("active"); 
            div.innerHTML += btn[14].innerHTML;
            break; 
    case "h":
        case "H":
            btn[15].classList.toggle("active"); 
            div.innerHTML += btn[15].innerHTML;
            break; 
    case "j":
        case "J":
            btn[16].classList.toggle("active"); 
            div.innerHTML += btn[16].innerHTML;
            break; 
    case "K":
        case "k":
            btn[17].classList.toggle("active"); 
            div.innerHTML += btn[17].innerHTML;
            break; 
    case "l":
        case "L":
            btn[18].classList.toggle("active"); 
            div.innerHTML += btn[18].innerHTML;
            break; 
    case "z":
        case "Z":
            btn[19].classList.toggle("active");
            div.innerHTML += btn[19].innerHTML; 
            break; 
    case "x":
        case "X":
            btn[20].classList.toggle("active"); 
            div.innerHTML += btn[20].innerHTML;
            break; 
    case "C":
        case "c":
            btn[21].classList.toggle("active"); 
            div.innerHTML += btn[21].innerHTML;
            break; 
    case "v":
        case "V":
            btn[22].classList.toggle("active"); 
            div.innerHTML += btn[22].innerHTML;
            break; 
    case "B":
        case "b":
            btn[23].classList.toggle("active"); 
            div.innerHTML += btn[23].innerHTML;
            break; 
    case "n":
        case "N":
            btn[24].classList.toggle("active"); 
            div.innerHTML += btn[24].innerHTML;
            break; 
    case "m":
        case "M":
            btn[25].classList.toggle("active");
            div.innerHTML += btn[25].innerHTML; 
            break;   
    case " ":
        case " ":
            btn[26].classList.toggle("active"); 
            div.innerHTML += "    "; 
            break;            
    }
})

document.body.addEventListener("keyup",(event)=>{
    switch(event.key){
    case "q":
        case "Q":
            btn[0].classList.toggle("active");
            break;
    case "w":
        case "W":
            btn[1].classList.toggle("active");  
            break;
    case "e":
        case "E":
            btn[2].classList.toggle("active");
            break;
    case "r":
        case "R":
            btn[3].classList.toggle("active"); 
            break;
    case "t":
        case "T":
            btn[4].classList.toggle("active"); 
            break; 
    case "y":
        case "Y":
            btn[5].classList.toggle("active"); 
            break;   
    case "U":
        case "u":
            btn[6].classList.toggle("active"); 
            break;   
    case "i":
        case "I":
            btn[7].classList.toggle("active"); 
            break;  
    case "o":
        case "O":
            btn[8].classList.toggle("active"); 
            break;  
    case "p":
        case "P":
            btn[9].classList.toggle("active"); 
            break;  
    case "a":
        case "A":
            btn[10].classList.toggle("active"); 
            break;  
    case "s":
        case "S":
            btn[11].classList.toggle("active"); 
            break;
    case "d":
        case "D":
            btn[12].classList.toggle("active"); 
            break;
    case "F":
        case "f":
            btn[13].classList.toggle("active"); 
            break;
    case "g":
        case "G":
            btn[14].classList.toggle("active"); 
            break; 
    case "h":
        case "H":
            btn[15].classList.toggle("active"); 
            break; 
    case "j":
        case "J":
            btn[16].classList.toggle("active"); 
            break; 
    case "K":
        case "k":
            btn[17].classList.toggle("active"); 
            break; 
    case "l":
        case "L":
            btn[18].classList.toggle("active"); 
            break; 
    case "z":
        case "Z":
            btn[19].classList.toggle("active"); 
            break; 
    case "x":
        case "X":
            btn[20].classList.toggle("active"); 
            break; 
    case "C":
        case "c":
            btn[21].classList.toggle("active"); 
            break; 
    case "v":
        case "V":
            btn[22].classList.toggle("active"); 
            break; 
    case "B":
        case "b":
            btn[23].classList.toggle("active"); 
            break; 
    case "n":
        case "N":
            btn[24].classList.toggle("active"); 
            break; 
    case "m":
        case "M":
            btn[25].classList.toggle("active"); 
            break;   
    case " ":
        case " ":
            btn[26].classList.toggle("active"); 
            break;    
    }
})
document.querySelector(".firstdiv").addEventListener("mousedown",(event)=>{
    if(event.target.nodeName!= "DIV"){
    let target = event.target;
    event.target.classList.add("active")
    div.innerHTML += target.innerHTML;}
})
document.querySelector(".firstdiv").addEventListener("mouseup",(event)=>{
    if(event.target.nodeName!= "DIV")
    event.target.classList.remove("active")
})
document.querySelector(".secondtdiv").addEventListener("mousedown",(event)=>{
    if(event.target.nodeName!= "DIV"){
    let target = event.target;
    event.target.classList.add("active")
    div.innerHTML += target.innerHTML;}
})
document.querySelector(".secondtdiv").addEventListener("mouseup",(event)=>{
    if(event.target.nodeName!= "DIV")
    event.target.classList.remove("active")
})
document.querySelector(".thirddiv").addEventListener("mousedown",(event)=>{
    if(event.target.nodeName!= "DIV"){
    let target = event.target;
    event.target.classList.add("active")
    div.innerHTML += target.innerHTML;}
})
document.querySelector(".thirddiv").addEventListener("mouseup",(event)=>{
    if(event.target.nodeName!= "DIV")
    event.target.classList.remove("active")
})
document.querySelector(".fourth").addEventListener("mousedown",(event)=>{
    if(event.target.nodeName!= "DIV"){
    let target = event.target;
    event.target.classList.add("active")
    div.innerHTML += "  ";}
})
document.querySelector(".fourth").addEventListener("mouseup",(event)=>{
    if(event.target.nodeName!= "DIV")
    event.target.classList.remove("active")
})