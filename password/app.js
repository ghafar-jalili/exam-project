const input = document.querySelector(".generate_input");
const lenghtPower = document.querySelector(".lenght");
const lenght = document.querySelector(".lentgh1");
const lenghtNumber = document.querySelector(".lenth_number");

lenght.addEventListener('input', function() {
    lenghtNumber.textContent = lenght.value;
});

const symbolradio = document.querySelector("#symbol");
const uppercaseradio = document.querySelector("#uppercase");
const numbersradio = document.querySelector("#numbers");
const lowercaseradio = document.querySelector("#lowercase");

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const specialSymbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~'.split('');
const numbers = '0123456789'.split('');

let passarr = [];
const generateBtn = document.querySelector(".generate");
generateBtn.addEventListener("click", () => {
    passarr = [];
    let selectedCount = 0;
    if (symbolradio.checked) {
        passarr = passarr.concat(specialSymbols);
        selectedCount++;
    }
    if (uppercaseradio.checked) {
        passarr = passarr.concat(uppercase);
        selectedCount++;
    }
    if (numbersradio.checked) {
        passarr = passarr.concat(numbers);
        selectedCount++;
    }
    if (lowercaseradio.checked) {
        passarr = passarr.concat(lowercase);
        selectedCount++;
    }
    switch (selectedCount) {
        case 1:
            lenghtPower.style.width = "25%";
            lenghtPower.style.borderBottomColor = "red";
            break;
        case 2:
            lenghtPower.style.width = "50%";
            lenghtPower.style.borderBottomColor = "orange";
            break;
        case 3:
            lenghtPower.style.width = "75%";
            lenghtPower.style.borderBottomColor = "yellow";
            break;
        case 4:
            lenghtPower.style.width = "100%";
            lenghtPower.style.borderBottomColor = "green";
            break;
        default:
            lenghtPower.style.width = "0%";
            lenghtPower.style.borderBottomColor = "transparent";
            break;
    }
    if (passarr.length > 0) {
        let password = "";
        for (let i = 0; i < lenght.value; i++) {
            const randomIndex = Math.floor(Math.random() * passarr.length);
            password += passarr[randomIndex];
        }
        input.value = password;
    } 
    else {
        alert("Please select at least one character type for the password.");
    }
});

const copy = document.querySelector(".bi-copy");
copy.addEventListener("click", () => {
    const input = document.querySelector("input");
    input.select();
    navigator.clipboard.writeText(input.value);
    copy.classList.replace("bi-copy", "bi-check");
    copy.style.color = "green";
    copy.style.fontSize = "20px";
    copy.style.marginTop = "-4px";
    document.querySelector(".copied").style.display = "inline";
    setTimeout(() => {
        copy.classList.replace("bi-check", "bi-copy");
        copy.style.color = "";
        copy.style.fontSize = "";
        copy.style.marginTop = "0px";
        document.querySelector(".copied").style.display = "none";
    }, 500);
});
