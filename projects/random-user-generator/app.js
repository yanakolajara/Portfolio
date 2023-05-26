fetch("https://randomuser.me/api")
.then((response) => response.json())
.then((json) => {
    const list = json.results[0]
    const name = document.createElement("p")
    name.appendChild(document.createTextNode(`${list.name.title} ${list.name.first}${list.name.last}`))
    document.querySelector(".divName").append(name)
    
    const image = document.createElement("img")
    image.setAttribute("class", "image")
    image.setAttribute("src", list.picture.large)
    document.querySelector(".divImage").append(image)

    const username = document.createElement("p")
    username.appendChild(document.createTextNode(`Username: ${list.login.username}`))
    document.querySelector(".username").append(username)

    let date = (list.dob.date).substring(0, 10)
    date = date.split('-')
    date = [date[1],date[2],date[0]]
    date = date.join('/')
    const dob = document.createElement("p")
    dob.appendChild(document.createTextNode(`Date of birth: ${date} (age: ${list.dob.age})`))
    document.querySelector(".dob").append(dob)

    const street = document.createElement("p")
    street.appendChild(document.createTextNode(`${list.location.street.number} ${list.location.street.name}, ${list.location.city}`))
    document.querySelector(".address").append(street)

    const state = document.createElement("p")
    state.appendChild(document.createTextNode(`${list.location.state}, ${list.location.postcode}`))
    document.querySelector(".address").append(state)

    const country = document.createElement("p")
    country.appendChild(document.createTextNode(`${list.location.country}`))
    document.querySelector(".address").append(country)

    const email = document.createElement("p")
    email.appendChild(document.createTextNode(`email: ${list.email}`))
    email.setAttribute("class", "email")
    document.querySelector("footer").append(email)

    const phone = document.createElement("p")
    phone.appendChild(document.createTextNode(`phone: ${list.cell}`))
    phone.setAttribute("class", "phone")
    document.querySelector("footer").append(phone)

    const reload = document.createElement("input")
    reload.setAttribute("onclick", "location.reload()")
    reload.setAttribute("type", "button")
    reload.setAttribute("value", "New user")
    document.querySelector(".address").append(reload)

})
.catch((error) => {
    console.log(error)
})