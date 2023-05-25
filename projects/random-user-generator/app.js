fetch("https://randomuser.me/api")
.then((response) => response.json())
.then((json) => {
    console.log(json)
})
.catch((error) => {
    console.log(error)
})

const form = document.querySelector(".formTest")
console.log(form)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("a")
})