const div = document.querySelector("div")
div.addEventListener("click", _ =>{
    const newP = document.createElement("p")
    newP.innerText = "OULALA"
    div.appendChild(newP)
})