import "./Compicard.css"
import logo from "../../assets/th.jpeg"

function Compi(){
    return(
        <>
  <div class="position-relative p-5 m-3 text-muted border border-dashed rounded-5">
  <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
<main class="container">
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">Competition Name</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
    </div>
  </div>


  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <img src={logo}></img>
        </div>
        <div class="col-auto d-none d-lg-block">
        
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <img src={logo}></img>
        </div>
        <div class="col-auto d-none d-lg-block">
        
        </div>
      </div>
    </div> 
  </div>
</main>
</div>


        </>

    )
}

export default Compi;
