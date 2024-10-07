import "./Hero.css";

import e20 from "../../assets/cars/c8.jpg";
import c4 from "../../assets/cars/c4.jpg";
import flip from "../../assets/c6.jpg"
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <img src={e20} className="d-block w-100" alt="..." />
            <div className="caption top-0 start-0 text-start p-4">
              <h1> MAHINDRA E20</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src={c4} className="d-block w-100" alt="..." />
            <div className="caption top-0 start-0 text-start p-4">
              <h1>Palis</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src={flip} className="d-block w-100" alt="..." />
            {/* <div className="caption top-0 start-0 text-start p-4">
              <h1>Gridvictus</h1>
            </div> */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
