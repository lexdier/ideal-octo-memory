function login(user, pass) {
    if (user === "admin" && pass === "admin") {
        alert("Todo bien todo correcto")

    } else {
        alert("Usuario o contraseña incorrecto")

    }

}

function extractdata() {


    const user = document.querySelector("#user")
    const pass = document.querySelector("#pass")

    login(user.value, pass.value)

}