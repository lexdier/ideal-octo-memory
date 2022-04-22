// import { Component, h } from "@stencil/core";

// @Component({

//     tag: 'the-login'


// })

// export class TheLogin {
//     login(user, pass) {
//         if (!(user === "admin" && pass === "admin")) {
//             return alert("Usuario o contraseña incorrecto")
//         }

//         window.location.replace('./index.html')
//     }

//     extractdata(e) {
//         e.preventDefault()

//         const user = document.querySelector("#user")
//         const pass = document.querySelector("#pass")

//         return this.login(user.value, pass.value)
//     }

//     render() {@
//         return (
//             <div class="d-flex ">
//                 <div class="vw-50 bg-secondary justify-content-center">
//                     <p class="p-3 fs-1 fw-bold">
//                         Welcome to my Web Site
//                     </p>
//                 </div>
//                 <form class="d-flex justify-content-center align-items-center vh-100 vw-100 " action="login.html" onSubmit={(event) => extractdata(event)}>
//                     <div class="d-flex flex-column bg-secondary justify-content-around shadow-lg p-3 mb-5 bg-body rounded border-dark rounded h-50" style="width: 400px;">
//                         <div class=" m-2">
//                             <input required id="user" type="text" class="form-control" placeholder="Username" />
//                         </div>
//                         <div class="m-2">
//                             <input required id="pass" class="form-control" type="password" placeholder="Password" />
//                         </div>


//                         <button type="submit" class="btn btn-light m-2 zoom bg-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Login">Login
//                         </button>
//                         <hr />


//                         <button class="btn btn-light m-2 zoom bg-secondary " data-bs-toggle="tooltip" data-bs-placement="top">Crear cuenta nueva
//                         </button>



//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }