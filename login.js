const loginform = document.querySelector("#login-form")
console.log(loginform)
const loginInput = loginform.querySelector("input")
console.log(loginInput)


function onLonginSubmit(event){
    event.preventDefault()
    console.log(loginInput.value)
    const username = loginInput.value;
    localStorage.setItem("username", username)
    //sayHello(username)
    hello.innerText = `hello, ${username}`
    loginform.classList.add("hidden")
}

loginform.addEventListener("submit", onLonginSubmit)



const username = localStorage.getItem("username")

const hello = document.querySelector("#hello")


if(username===null){

}else{
    hello.innerText = `hello, ${username}`
    loginform.classList.add("hidden")
}

//function sayHello(username){

//    hello.innerText = `Hello, ${username}`
//}
