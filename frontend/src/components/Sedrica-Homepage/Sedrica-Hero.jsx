


import vid from "../../assets/Snapinsta.app_video_B34210F4F18AE9E739D96D4A315DA581_video_dashinit.mp4"

function SHero() {
  return (
    <div>
      <video style={{marginTop:"1%",marginLeft:"auto", marginRight:"auto", display:"block"}} controls width="75%">
        <source src={vid} type="video/mp4"/>
      </video>
    </div>
  );
};
export default SHero;