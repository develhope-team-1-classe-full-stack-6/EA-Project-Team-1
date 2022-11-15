const formSelect = document.querySelector(".form-select");
let ulNodes = formSelect.querySelector("ul");
const displayLang = document.getElementById("display-lang");
let selectedLang = document.querySelector(".selected");

ulNodes.addEventListener('click', (event) => {
    if (event.target !== ulNodes) {

        if (event.target != selectedLang) {
            selectedLang.classList.remove("selected");

            if (event.target.parentElement == ulNodes) {
                event.target.classList.add("selected");
            } else {
                event.target.parentElement.classList.add("selected");
            }
        }
    }
    selectedLang = document.querySelector(".selected");

    displayLang.innerText = selectedLang.innerText;

    formSelect.blur();
})