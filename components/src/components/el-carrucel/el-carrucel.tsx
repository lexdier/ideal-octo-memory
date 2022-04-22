import { Component, h } from '@stencil/core';

@Component({
    tag: 'el-carrucel',

})



export class ElCarrucel {


    render() {
        return (
            <div class="container">
                <div class="d-flex">
                    <div class="m-3">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae architecto similique sint dolorem possimus? Quaerat enim repellendus dicta quasi ullam aperiam eligendi optio sint, ad fuga quis voluptatibus porro? Quam?Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Doloribus vero nostrum perspiciatis earum aperiam deleniti quia consectetur cum id beatae odio, tenetur dolore quo exercitationem fugiat rem ad deserunt tempora. Repudiandae architecto similique
                            sint dolorem possimus? Quaerat enim repellendus dicta quasi ullam aperiam eligendi optio sint, ad fuga quis voluptatibus porro? Quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vero nostrum perspiciatis
                            earum aperiam deleniti quia consectetur cum id beatae odio, tenetur dolore quo exercitationem fugiat rem ad deserunt tempora. Repudiandae architecto similique sint dolorem possimus? Quaerat enim repellendus dicta quasi ullam
                            aperiam eligendi optio sint, ad fuga quis voluptatibus porro? Quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="w-50">
                        <div id="carouselExampleIndicators2" class="carousel slide bg-black align-self-start mt-1 w-100" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="filter-invert active" aria-label="Slide 1" aria-current="true"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class="filter-invert"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class="filter-invert"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4" class="filter-invert"></button>
                            </div>
                            <div class="carousel-inner rounded">
                                <div class="carousel-item active">
                                    <img src="https://picsum.photos/558/390?grayscale" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://picsum.photos/558/390?grayscale" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://picsum.photos/558/390?grayscale" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://picsum.photos/558/390?grayscale" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev bg" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next bg" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
