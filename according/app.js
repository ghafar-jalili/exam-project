const htmlBtn = document.querySelector(".htmlbtn");
const htmlDiv = document.querySelector(".html");

const cssBtn = document.querySelector(".cssbtn");
const cssDiv = document.querySelector(".css");

const jsBtn = document.querySelector(".jsbtn");
const jsDiv = document.querySelector(".js");

const phpBtn = document.querySelector(".phpbtn");
const phpDiv = document.querySelector(".php");
htmlBtn.addEventListener("click" , () =>{
    htmlBtn.classList.toggle("active");
    if(htmlDiv.style.maxHeight){
        htmlDiv.style.maxHeight = null;
    }
    else{
        htmlDiv.style.maxHeight = htmlDiv.scrollHeight +'px';
        if(cssDiv.style.maxHeight ||phpDiv.style.maxHeight ||jsDiv.style.maxHeight){ 
        cssDiv.style.maxHeight = null;
        jsDiv.style.maxHeight = null;
        phpDiv.style.maxHeight = null;
        cssBtn.classList.remove("active");
        phpBtn.classList.remove("active");
        jsBtn.classList.remove("active");
        }
    }
});

cssBtn.addEventListener("click" , () =>{
    cssBtn.classList.toggle("active");
    if(cssDiv.style.maxHeight){
        cssDiv.style.maxHeight = null;
    }
    else{
        cssDiv.style.maxHeight = cssDiv.scrollHeight +'px';
        if(htmlDiv.style.maxHeight ||phpDiv.style.maxHeight ||jsDiv.style.maxHeight)
        {  
            htmlDiv.style.maxHeight = null;
            jsDiv.style.maxHeight = null;
            phpDiv.style.maxHeight = null;
            htmlBtn.classList.remove("active");
            phpBtn.classList.remove("active");
            jsBtn.classList.remove("active");
        }
    }
})


jsBtn.addEventListener("click" , () =>{
    jsBtn.classList.toggle("active");
    if(jsDiv.style.maxHeight){
        jsDiv.style.maxHeight = null;
    }
    else{
        jsDiv.style.maxHeight = jsDiv.scrollHeight +'px';
        if(phpDiv.style.maxHeight ||cssDiv.style.maxHeight ||htmlDiv.style.maxHeight)
            {  
                cssBtn.classList.remove("active");
                phpBtn.classList.remove("active");
                htmlBtn.classList.remove("active");
                htmlDiv.style.maxHeight = null;
                cssDiv.style.maxHeight = null;
                phpDiv.style.maxHeight = null;
            }
    }
})


phpBtn.addEventListener("click" , () =>{
    phpBtn.classList.toggle("active");
    if(phpDiv.style.maxHeight){
        phpDiv.style.maxHeight = null;
    }
    else{
        phpDiv.style.maxHeight = phpDiv.scrollHeight +'px';
        if(htmlDiv.style.maxHeight ||cssDiv.style.maxHeight ||jsDiv.style.maxHeight)
            {  
                cssBtn.classList.remove("active");
                htmlBtn.classList.remove("active");
                jsBtn.classList.remove("active");
                htmlDiv.style.maxHeight = null;
                jsDiv.style.maxHeight = null;
                cssDiv.style.maxHeight = null;
            }
    }
})