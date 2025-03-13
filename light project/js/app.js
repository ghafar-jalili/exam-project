const body = document.querySelector(".img");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    body.style.backgroundImage = "radial-gradient(circle at 610px 400px, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)";
    document.querySelector(".me").src="./off-removebg-prekview.png";
  } else {
    body.style.backgroundImage = "url('your-image.jpg')"; // Revert to the original image
    document.querySelector(".me").src="./off-removebg-preview.png";
}
});