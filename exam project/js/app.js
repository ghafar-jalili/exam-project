const container = document.querySelector(".container");
const addBtn = document.querySelector(".btn");
const nextBtn = document.getElementById("btn");
const inputField = document.querySelector(".input");

const sumsArray = []; // Array to store correct sums
const resultArray = []; // Array to store user inputs

// Function to handle input changes in the number of questions
function changeValue() {
    const numberOfQuestion = inputField.value;
    console.log(numberOfQuestion);
}

// Add event listener to the input field for number of questions
inputField.addEventListener("input", changeValue);

// Add event listener to the "Next" button
nextBtn.addEventListener("click", () => {
    container.style.display = "inline";
    document.getElementById("hid").style.display = "none";
    
    sumsArray.length = 0;
    resultArray.length = 0;

    const numQuestions = parseInt(inputField.value);
    if (isNaN(numQuestions) || numQuestions <= 0) {
        alert("Please enter a valid number of questions.");
        return;
    }

    // Generate new questions
    for (let i = 1; i <= numQuestions; i++) {
        const random_1 = Math.floor(Math.random() * 10);
        const random_2 = Math.floor(Math.random() * 10);

        const sum = random_1 + random_2;
        sumsArray.push(sum);

        const newDiv = document.createElement("div");
        newDiv.classList.add("question");
        newDiv.innerHTML = `
            <div>
                <h3>Question ${i}</h3>
                <br> 
                <p>What is the result of <b>${random_1}</b> + <b>${random_2}</b></p>
                <br> 
                <input type="text" id="input${i}">
            </div>`;
        container.appendChild(newDiv);

        // Add event listener to the input field to capture user input
        const inputElement = document.getElementById(`input${i}`);
        inputElement.addEventListener("input", () => {
            const userInput = Number(inputElement.value); // Convert input to number
            resultArray[i - 1] = userInput; // Update the resultArray at the correct index
            console.log("User inputs:", resultArray);
        });
    }

    // Add a "Check Answers" button at the bottom of the container
    const checkButton = document.createElement("button");
    checkButton.textContent = "Check Answers";
    checkButton.classList.add("check-btn");
    container.appendChild(checkButton);

    // Add event listener to the "Check Answers" button
    checkButton.addEventListener("click", () => {
        let correctCount = 0;

        // Compare sumsArray and resultArray
        for (let i = 0; i < sumsArray.length; i++) {
            if (sumsArray[i] === resultArray[i]) {
                correctCount++; // Increment correct count if answers match
            }
        }

        // Clear the container and display the result
        container.innerHTML = "";
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `
            <h3>Result</h3>
            <p>You got <b>${correctCount}</b> out of <b>${sumsArray.length}</b> questions correct!</p>
        `;
        container.appendChild(resultDiv);
    });
});