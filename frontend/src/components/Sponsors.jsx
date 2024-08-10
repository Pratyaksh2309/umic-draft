import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/like-svgrepo-com.svg"

function Sponsors(){
    return(
        <>
    <Header/>
        <div>
        <div class="container px-4" id="custom-cards">
    <h2 class="p-4 pb-2 border-bottom">Sponsors</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">FIRA</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">
                <small>Brazil</small>
              </li>
              <li class="d-flex align-items-center">
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"style={{backgroundImage: "url('unsplash-photo-2.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Flipkart Grid</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">

                <small>India</small>
              </li>
              <li class="d-flex align-items-center">

                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">
 
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
     
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


  <div>
        <div class="container px-4" id="custom-cards">

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">FIRA</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">
                <small>Brazil</small>
              </li>
              <li class="d-flex align-items-center">
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"style={{backgroundImage: "url('unsplash-photo-2.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Flipkart Grid</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">

                <small>India</small>
              </li>
              <li class="d-flex align-items-center">

                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg');"}}>
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src={logo} alt="Bootstrap" width="32" height="32" />
              </li>
              <li class="d-flex align-items-center me-3">
 
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
     
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


  <Footer/>
        </>

    )};

    export default Sponsors;