const title = document.querySelector(".red")
console.log(title)
function handleClick(){

    if(title.style.color ==="red"){
        title.style.color = "blue"
    }else{
        title.style.color = "red"
    }
}

title.addEventListener("click", handleClick);

const btn = document.querySelector("#btn")

const element = document.querySelector("#blue-title")
console.log(element)

function btnclick(){
    console.log("버튼")
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
    }else{
        element.classList.add('hidden')
    }
}

btn.addEventListener("click", btnclick)



