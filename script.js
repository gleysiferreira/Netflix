let button = document.getElementById("button-question")
let menu = document.getElementById("question")
let image = document.getElementById("image-question")

function aparecer() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
        image.id = "image-question-spin"
    } else {
        menu.style.display = "none"
        image.id = "image-question"

    }

}

button.addEventListener("click", aparecer)