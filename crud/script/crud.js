/*
const mysql = require('mysql')
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})
conection.connect((err) => {
        if (err) throw er
        console.log('La conexion funciona')
    })*/
//----------------------------------My Project---------------------------------------

const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeRegisterModal')
const registerForm = document.getElementById('register-form')
    //firebase.initializeApp(firebaseConfig)
    /*const studentRef = firebase.database().ref('students')*/

const showRegisterModal = () => {
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = registerForm['nombre'].value
    const apellidoPaterno = registerForm['apePat'].value
    const apellidoMaterno = registerForm['apeMat'].value
    const celular = registerForm['cel'].value
    const correo = registerForm['correo'].value
    const descripcion = registerForm['descrip'].value

    /*const registerStudent = studentRef.push()
    registerStudent.set({
        Uid: registerStudent.path.pieces_[1],
        Nombre: nombre,
        Apellido_Paterno: apellidoPaterno,
        Apellido_Materno: apellidoMaterno,
        Telefono: celular,
        Correo_Electronico: correo,
        Descripcion: descripcion,
    })

    showRegisterModal()*/
})