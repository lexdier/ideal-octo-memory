function login(user, pass) {
    if (!(user === "admin" && pass === "admin")) {
        return alert("Usuario o contraseña incorrecto")
    }

    window.location.replace('./index.html')
}

function extractdata(e) {
    e.preventDefault()

    const user = document.querySelector("#user")
    const pass = document.querySelector("#pass")

    return login(user.value, pass.value)
}