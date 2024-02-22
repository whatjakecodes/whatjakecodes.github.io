const node = document.querySelector("#versionNumber")
const versionNumber = "vSoon";
node.textContent = versionNumber;

const dateNode = document.querySelector("#versionDate")
dateNode.textContent = "2024-02-21";

const button = document.querySelector("#versionBox button")
button.addEventListener("click", function () {
    const box = document.querySelector("#versionBox")
    document.removeChild(box)
});