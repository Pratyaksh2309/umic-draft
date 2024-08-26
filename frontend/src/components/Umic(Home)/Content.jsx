import vid from "../../assets/Snapinsta.app_video_An9msjr1wGwuBBltzUQZ1xCh63J2LtO2e06lut7BHSFc9wEmIDSbgKm1BAMcoq7l0UxTdg7NKALwDC0bxUTY7B-D.mp4"
import Card from "./Card";
import im from "../../assets/Umic.png"


function Content(){
    return(
        <>
        <div class="row featurette m-5">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1"> <img class="bd-placeholder-img" style={{backgroundColor: "white"}} src={im} width="50px" height="auto" /> UMIC <span class="text-body-secondary">It’ll blow your mind.</span></h2> <br/>
        <p class="lead">Unmesh Mashruwala Innovation Cell, also widely known as UMIC, is a tech team formed to embrace and develop the idea of an autonomous future. The team consists of 60+ students from various fields and years of study at IIT Bombay. Under the sheds of the UMIC, the primary area of focus is developing autonomous vehicles.</p>
      </div>
      <div class="col-md">
        <video style={{marginTop:"1%",marginLeft:"auto", marginRight:"auto", display:"block"}} autoPlay controls width="80%">
        <source src={vid} type="video/mp4"/>
      </video>
      </div>
    </div>
        <Card/>
        </>
    )
}

export default Content;