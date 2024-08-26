import "./CompiHero.css"
import Co1 from "../../assets/Co1.jpeg"
function Chero(){
    return(
        <>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" >
    <div class="col-md-6 p-lg-5 mx-auto my-5">
    <div class=" shadow-sm d-none d-md-block image-left">    <img src={Co1} alt="" height="auto" width="500px" /></div>
    <div class=" shadow-sm d-none d-md-block image-right">    <img src={Co1} alt="" height="auto" width="500px" /></div>
      <h1 class="display-3 fw-bold">Competitions</h1>
      <h3 class="fw-normal text-muted mb-3">Events in which we participated</h3>
  
    </div>
  

    <div class=" shadow-sm d-none d-md-block"></div>
  </div>
        </>

    )
}

export default Chero;