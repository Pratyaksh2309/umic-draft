import logo2 from "../../assets/Sed.png"

function Card(){
    return(
        <>
        <div class=" p-5 mb-2 rounded-3" style={{background: "hsla(0, 0%, 100%, 0.15)",backdropFilter:"blur(30px)",display:"flex",flexWrap:"wrap"}}>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" src={logo2} width="100%" height="auto" role="img"/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">Fly High</strong>
          <h3 class="mb-0">Aerove</h3>
          <br/>
          <p class="card-text mb-auto">Our purpose is to further the boundaries of autonomous aerial technology and realize the true potential of this field. We aim to contribute and start the culture of creating cutting edge technology through indigenous innovation.
          </p>
          <br/>
          <a href="/Teams/Aerove" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>

      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" src={logo2} width="100%" height="auto"/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success-emphasis">Safe Drive</strong>
          <h3 class="mb-0">Sedrica</h3>
          <br/>
          <p class="mb-auto">In mid-2000's Raj Mashruwala gave students access to the resources they needed and hence UMIC was born.Looking towards greater challenges, UMIC aligned its vision with the dream of autonomous mobility and hence SeDriCa was born in 2011.</p>
          <br/>
          <a href="/Teams/Sedrica" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>

      </div>
    </div>
  </div>
        </>
    )
}

export default Card;