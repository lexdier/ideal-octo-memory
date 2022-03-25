import { Component, h } from "@stencil/core";

@Component({

    tag: 'the-navbar'


})

export class TheNavbar {

    render() {
        return (
            <div class="d-flex shadow my-4 rounded z-index-button w-100 h-100  div-border align-self-start">
                <div class="w-50">
                    <h1 class="fw-bolder my-0" >My web site</h1>

                </div>
                <div class="d-flex justify-content-center z-index-button-new w-50">
                    <div class="dropdown">
                        <button class="z-index-button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-house-chimney"></i>
                            Home Menu
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#enlace">Enlace</a></li>
                            <li><a class="dropdown-item" href="#enlace2">Segundo enlace</a></li>
                            <li><a class="dropdown-item" href="#enlace3">Tercer enlace</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="z-index-button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-apple-whole"></i>
                            Apple Menu
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item" href="#enlace">Enlace</a></li>
                            <li><a class="dropdown-item" href="#enlace2">Segundo enlace</a></li>
                            <li><a class="dropdown-item" href="#enlace3">Tercer enlace</a></li>
                        </ul>
                    </div>

                    <div class="dropdown">
                        <button class="z-index-button btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user"></i>
                            Profile
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                            <li><a class="dropdown-item">My Profile</a></li>
                            <li><a class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Settings</a></li>
                            <li><a class="dropdown-item">Help</a></li>
                        </ul>
                    </div>
                </div>



            </div>

        )
    }
}