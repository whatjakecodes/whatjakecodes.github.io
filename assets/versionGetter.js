const node = document.querySelector("#versionNumber")
const versionNumber = "vSoon";
node.textContent = versionNumber;

const dateNode = document.querySelector("#versionDate")
// thanks for generating this, jetbrains AI
const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed in JavaScript
const day = ("0" + date.getDate()).slice(-2); // Add leading zero for single-digit days
const formattedDate = `${year}-${month}-${day}`;
dateNode.textContent = formattedDate;

const button = document
    .getElementById("versionBox")
    .querySelector("button")

button.addEventListener("click", function () {
    button.parentNode.removeChild(button);
});