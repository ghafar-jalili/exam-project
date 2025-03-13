const resultDiv = document.querySelector(".result1");
const resultDiv_user = document.querySelector(".result2");

let how_many_loop = parseInt(prompt("How many shots do you want to hit?"));
let username = String(prompt("what is your name?"));
document.querySelector(".username").innerHTML = username;
let arr = [];
let colculate = 0;

for (let i = 1; i <= how_many_loop; i++) {
    let random = Math.floor(Math.random() * 10);
    colculate += random;
    arr.push(random);
}

const addDiv = document.createElement("div");
addDiv.classList.add("addDiv");
resultDiv.innerHTML = `
    <p>Computer hit this score: <span>${arr.join(', ')}</span><br> and total mark is</p>
    <h1>${colculate}</h1>
    <button class="btn passive">Hit shot</button>
    <br>
    <span>You have to chase ${++colculate} by ${how_many_loop} shots</span>
`;
resultDiv.appendChild(addDiv);

const addDiv_user = document.createElement("div");
let arr_user = [];
addDiv_user.classList.add("addDiv_user");
resultDiv_user.innerHTML = `
    <p>${username} hit this score: <span class="myspan">${arr_user.join(', ')}</span><br> and total mark is</p>
    <h1 class="h1">0</h1>
    <button class="btn add_random_number">Hit shot</button>
    <br>
    <span class="small_result">You need <span class="small_result_span">${colculate}</span> by ${how_many_loop} shots</span>
`;

const add_random_number_btn = document.querySelector(".add_random_number");
let counter = 0;
let col = 0;

const span_small = document.querySelector(".small_result");
let span_small_result = document.querySelector(".small_result_span");

add_random_number_btn.addEventListener("click", () => {
    counter++;
    if (counter <= how_many_loop) {
        let random_user = Math.floor(Math.random() * 10);
        arr_user.push(random_user);
        document.querySelector(".myspan").innerHTML = arr_user.join(', ');
        col += random_user;
        document.querySelector(".h1").innerHTML = col;

        if (col > colculate) {
            span_small.innerHTML = `Congratulations🏆! You won by <br>${how_many_loop - counter} shots. and ${col-colculate} score `;
            add_random_number_btn.classList.add("passive");
            document.querySelector(".resu").innerHTML = "Congratulations🏆!"; 
            document.querySelector(".resu").style.display = "inline";
            document.querySelector(".resu").style.color = "green";
            document.querySelector(".resu").style.borderColor = "green"; 
        } else if (col === colculate && counter === how_many_loop) {
            span_small.innerHTML = "You tied the match🙌!";
            document.querySelector(".resu").innerHTML = "Match tied!"; 
            add_random_number_btn.classList.add("passive");
            document.querySelector(".resu").style.display = "inline";
            document.querySelector(".resu").style.color = "black";
            document.querySelector(".resu").style.borderColor = "black";
            document.querySelector(".resu").innerHTML = "Match tied "; 
        } else if (counter === how_many_loop && col < colculate) { 
            span_small.style.color = "red"; // Change color to red
            add_random_number_btn.classList.add("passive");
            document.querySelector(".resu").style.display = "inline";
            document.querySelector(".resu").style.color = "red";
            document.querySelector(".resu").style.borderColor = "red";
            document.querySelector(".resu").innerHTML = "Oops😌! You lost "; 
            span_small.innerHTML = `Oops😌! You lost the game by <br>${colculate - col} score.`;
        } else {
            span_small_result = colculate - col;
            span_small.innerHTML = `You need ${span_small_result} score by ${how_many_loop - counter} shots`;
        }
    } else {
        add_random_number_btn.classList.add("passive");
    }
});