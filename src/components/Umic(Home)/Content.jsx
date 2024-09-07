import { useRef } from 'react';
import vid from "../../assets/Snapinsta.app_video_An9msjr1wGwuBBltzUQZ1xCh63J2LtO2e06lut7BHSFc9wEmIDSbgKm1BAMcoq7l0UxTdg7NKALwDC0bxUTY7B-D.mp4";
import Card from "./Card";
import im from "../../assets/Umic.png";

function Content() {
  // Reference to the video element
  const videoRef = useRef(null);

  // Function to toggle video playback
  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <div className="row featurette m-5 align-items-center">
        {/* Text Section */}
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            <img
              style={{boxShadow: "0 0 15px rgba(0, 0, 0, 0.6);"}}
              src={im}
              width="50px"
              height="auto"
              alt="UMIC Logo"
            />{" "}
            UMIC <span className="text-body-secondary">It’ll blow your mind.</span>
          </h2>
          <br />
          <p className="lead">
            Unmesh Mashruwala Innovation Cell, also widely known as UMIC, is a tech team formed to embrace and develop the idea of an autonomous future. The team consists of 60+ students from various fields and years of study at IIT Bombay. Under the sheds of the UMIC, the primary area of focus is developing autonomous vehicles.
          </p>
        </div>

        {/* Video Section */}
        <div className="col-md-5 d-flex align-items-center">
          <video
            ref={videoRef}
            className="w-100"
            style={{
              height: "auto",
              maxHeight: "100%",
            }}
            autoPlay
            loop
            onClick={togglePlayback}  // Toggle playback on click
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </>
  );
}

export default Content;
