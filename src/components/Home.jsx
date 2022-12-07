import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/cheloytec/image/upload/v1665584604/online-shop/laptop.png"
              className="d-block w-2/3 h-510"
              alt="Laptop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/cheloytec/image/upload/v1668369793/online-shop/DVD-Player.png"
              className="d-block w-2/3 h-510"
              alt="Hp Laptop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/cheloytec/image/upload/v1665584604/online-shop/ear-piece.png"
              className="d-block w-2/3 h-510"
              alt="Hp Laptop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/cheloytec/image/upload/v1665584604/online-shop/Laptop1.png"
              className="d-block w-2/3 h-510"
              alt="Hp Laptop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/cheloytec/image/upload/v1665584596/online-shop/Tvs.png"
              className="d-block w-2/3 h-510"
              alt="Plasma TV"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
