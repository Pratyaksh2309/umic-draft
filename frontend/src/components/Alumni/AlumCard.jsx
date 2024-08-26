import MyCard from "./CardTwist";

function AlumCard(){
    return(
        <>
         <div class="container">
        <div class="row">
      <div class="col-lg-4" >
        <MyCard/>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <MyCard/>
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <MyCard/>
      <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
    <hr class="featurette-divider"></hr>


    </div>
    </div>
        </>

    )
}

export default AlumCard;