import Footer from "../Footer";
import logo from "../../assets/like-svgrepo-com.svg";
import nvedia from "../../assets/sponsor/nvedia.jpeg";
import ol from "../../assets/sponsor/ouster.jpeg"

function Sponsors() {
  return (
    <>
      <h2 className="p-4 pb-2 border-bottom">Sponsors</h2>
      <div className="container" id="custom-cards">
        <div className="row row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${nvedia})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${ol})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('unsplash-photo-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another</h3>
                <ul className="d-flex list-unstyled mt-auto justify-content-end">
                  <li>
                    <img src={logo} alt="Bootstrap" width="32" height="32" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Sponsors;
