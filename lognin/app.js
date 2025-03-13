const loginbtn = document.querySelector(".login_btn");
const logindiv = document.querySelector(".login_div");
const password = document.querySelector(".password");
const nextbtn = document.querySelector(".loginbtn_nex");
const exitbtn = document.querySelector(".loginbtn_previous");
const form = document.querySelector(".form");
const namefeild = document.querySelector(".neme");
const emailfeild = document.querySelector(".email");
const okbtn = document.querySelector(".ok");
const enterPasswordDiv = document.querySelector(".enterpassword");
const checkcode = document.querySelector(".checkcode");
const pleasewrite = document.querySelector(".pleasewrite");

// Declare pas as a global variable
let pas = "";

// Function to check if both fields are filled
const checkFields = () => {
    if (namefeild.value.trim() !== "" && emailfeild.value.trim() !== "") {
        nextbtn.classList.remove("disabled");
        nextbtn.disabled = false;
    } else {
        nextbtn.classList.add("disabled");
        nextbtn.disabled = true;
    }
};

// Event listener for the login button
loginbtn.addEventListener("click", () => {
    logindiv.style.display = "block"; // Show the login form
    loginbtn.style.display = "none"; // Hide the login button
});

// Event listener for the exit button
exitbtn.addEventListener("click", () => {
    logindiv.style.display = "none"; // Hide the login form
    loginbtn.style.display = "block"; // Show the login button
});

// Event listeners for input fields
namefeild.addEventListener("input", checkFields);
emailfeild.addEventListener("input", checkFields);

// Event listener for the Next button
nextbtn.addEventListener("click", () => {
    if (!nextbtn.classList.contains("disabled")) {
        logindiv.style.display = "none"; // Hide the login form
        loginbtn.style.display = "none"; // Hide the login button

        // Show both the password and remaining time windows
        password.style.display = "block";
        enterPasswordDiv.style.display = "block";

        // Generate random password
        pas = ""; // Reset pas
        for (let i = 0; i <= 4; i++) {
            pas += Math.floor(Math.random() * 9);
        }
        password.innerHTML = `Your code is: <i class="bi bi-copy closebtn1"></i> ${pas}`;

        // Timer logic
        let minute = 0;
        let second = 30;
        const timer = setInterval(() => {
            if (second === 0) {
                if (minute === 0) {
                    clearInterval(timer);
                    // Update the content of enterPasswordDiv without replacing it
                    enterPasswordDiv.innerHTML = `
                        <h3>Oh no! Time is up!</h3>
                        <br>
                        <a href="" style="color: white; margin-top: 5px;">Don't receive code</a>
                    `;
                } else {
                    minute--;
                    second = 30;
                }
            } else {
                second--;
            }
            document.querySelector(".rmaintime").innerHTML = `${minute}:${second.toString().padStart(2, "0")}`;
        }, 1000);

        // Hide the password window after 5 seconds
        setTimeout(() => {
            password.style.display = "none";
        }, 5000);
    }
});

// Event listener for the OK button
okbtn.addEventListener("click", () => {
    if (checkcode.value === pas) {
        enterPasswordDiv.style.display = "none"; // Hide the password window

        // Create and append an h1 element to the body
        const h1 = document.createElement("h1");
        h1.textContent = `Welcome, ${namefeild.value}!`;
        h1.style.color = "white";
        h1.style.textAlign = "center";
        h1.style.marginTop = "20px";
        document.body.appendChild(h1);
    } else {
        pleasewrite.style.display = "inline";
        okbtn.classList.add("disabled");
    }
});

// Event delegation for the copy icon
document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("closebtn1")) {
        // Copy the code to the clipboard
        const code = password.innerText.split(": ")[1]; // Extract the code
        navigator.clipboard.writeText(code).then(() => {
            // Change the icon to "Copied"
            const copyIcon = event.target;
            copyIcon.classList.remove("bi-copy");
            copyIcon.classList.add("bi-check");
            copyIcon.textContent = " Copied";

            // Set the copied code as the value of the password input field
            checkcode.value = code;

            // Reset the icon after 2 seconds
            setTimeout(() => {
                copyIcon.classList.remove("bi-check");
                copyIcon.classList.add("bi-copy");
                copyIcon.textContent = "";
            }, 2000);
        });
    }
});