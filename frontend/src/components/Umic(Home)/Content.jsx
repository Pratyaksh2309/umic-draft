import bg from "../../assets/th.jpeg"
import Card from "./Card";
function Content(){
    return(
        <>
        <div class="row featurette m-5">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Umic <span class="text-body-secondary">It’ll blow your mind.</span></h2>
        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div class="col-md">
        <img src={bg} height="100%" width="90%" alt="blank"/>
      </div>
    </div>
        <Card/>
        </>
    )
}

export default Content;