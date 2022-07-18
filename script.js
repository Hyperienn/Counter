let counter = 0

const btns = document.getElementsByClassName("btn")
const value = document.getElementById("value")

for (let i = 0; i < btns.length; i++) {
    getBtn = btns[i]
    getBtn.addEventListener("click", function (event) {
        let buttonClicked = event.target
        if (buttonClicked.classList.contains("increase")) {
            counter++
        } else if (buttonClicked.classList.contains("decrease")) {
            counter--
        } else {
            counter = 0
        }

        value.innerText = counter
    })
}
