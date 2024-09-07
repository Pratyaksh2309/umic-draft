import Footer from "../Footer";
import nvedia from "../../assets/sponsor/nvedia.png";
import ouster from "../../assets/sponsor/ouster.png";
import reliance from "../../assets/sponsor/Reliance.png";
import texas from "../../assets/sponsor/texas.png";
import continental from "../../assets/sponsor/continental.png";
import "./Sponsors.css"; // Import the CSS file

function Sponsors() {
  return (
    <div>
      <h2 className="p-4 pb-2 border-bottom">Sponsors</h2>
      <div className="sponsors-container">
        <img src={nvedia} alt="Nvedia" className="sponsor-image" />
        <img src={ouster} alt="Ouster" className="sponsor-image" />
        <img src={reliance} alt="Reliance" className="sponsor-image" />
        <img src={texas} alt="Texas" className="sponsor-image" />
        <img src={continental} alt="Continental" className="sponsor-image" />
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
