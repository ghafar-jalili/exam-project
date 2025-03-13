const labels = document.querySelectorAll(".divs");

function toggleClass(event) {
    event.target.classList.toggle("divss");
}

// Attach the event listener to each element in the NodeList
labels.forEach(label => {
    label.addEventListener("click", toggleClass);
});