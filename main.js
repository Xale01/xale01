const div = document.querySelector("div")
let count = 0
const liste = ["pop", "holala", "hola?", "hola.", "eh j'ai dit hola", "eh faut répondre", "RÉPOND WESH"]
div.addEventListener("click", _ =>{
    const newP = document.createElement("p")
    newP.innerText = liste[count]
    count += 1
    div.appendChild(newP)
})
