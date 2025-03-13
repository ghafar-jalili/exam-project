const inputs = document.getElementsByTagName("input");
const colculate = document.querySelector(".colculate");
const result = document.querySelector(".result");
const tryagin = document.querySelector(".tryagain"); 

colculate.addEventListener("click", (event) => {
    const totalQuestions = Number(inputs[0].value);
    const correctAnswers = Number(inputs[1].value);
    const incorrectAnswers = Number(inputs[2].value);

    if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "") {
        if (totalQuestions === (correctAnswers + incorrectAnswers)) {
            const percentage = (correctAnswers * 100) / totalQuestions;
            result.innerHTML = "your score percentage is : "+percentage.toFixed(2) + " %";
            event.preventDefault();
            if(percentage>=55)
            {
                document.getElementsByTagName("p")[0].style.color = "green";
            }
            else{
                document.getElementsByTagName("p")[0].style.color = "red";
            }
            colculate.classList.add("disabled");
        } else {
            alert("Total questions should be equal to the sum of correct and incorrect questions.");
            event.preventDefault();
            colculate.classList.add("disabled");
        }
    } else {
        alert("Empty inputs aren't allowed!");
        event.preventDefault();
        colculate.classList.add("disabled");
    }
});
tryagin.addEventListener("click",()=>{
    colculate.classList.remove("disabled");
})