import "./Hero.css";

import e20 from "../../assets/cars/c8_new.jpg";
import c4 from "../../assets/cars/c4_new.jpg";
import c1 from "../../assets/cars/c1.jpg";  
import c6 from "../../assets/cars/c6.jpeg";  
import flip from "../../assets/flip.jpg";

function Hero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <img src={e20} className="d-block w-100" alt="MAHINDRA E20" />
            <div className="caption top-0 start-0 text-start p-1">
              <h1>MAHINDRA E20</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <img src={c4} className="d-block w-100" alt="Palis" />
            <div className="caption top-0 start-0 text-start p-1">
              <h1>PALIS</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <img src={c1} className="d-block w-100" alt="Gridvictus" />
            <div className="caption top-0 start-0 text-start p-1">
              <h1>FIRA</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <img src={c6} className="d-block w-100" alt="Gridvictus" />
            <div className="caption top-0 start-0 text-start p-1">
              <h1>AUTO-NAV</h1>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2500">
            <img src={flip} className="d-block w-100" alt="Gridvictus" />
            <div className="caption top-0 start-0 text-start p-1">
              <h1>GRIDVICTUS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
