const title = document.querySelector(".title")
const titleSplit = title.innerHTML.split("")
title.remove()
const NewTitle = document.createElement("div")
NewTitle.classList.value = "title"
titleSplit.forEach(letter => {
    const LetterObj = document.createElement("span")
    LetterObj.innerHTML = letter
    NewTitle.appendChild(LetterObj)
})
document.querySelector("body").insertBefore(NewTitle,document.querySelector(".BoxOfScreens"))

const ScreensDiv = document.querySelectorAll(".BoxOfScreens div")
const ButtonX = document.querySelector(".ButtonX")

function TrocaTela(fto){
    ScreensDiv.forEach(ele => {
        ele.classList.remove("ativo")
        if(parseInt(ele.classList.value.slice(6,7)) === fto){
            ele.classList.add("ativo")
        }
    })
}