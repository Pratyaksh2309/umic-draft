

import MyCard from "./CardTwist";

import oc from '../../assets/Research Group/Aaditi1.jpg';

import sub1 from '../../assets/Research Group/Nasir.JPG';
import sub2 from '../../assets/Research Group/ParthLoya1.jpg';
import sub3 from '../../assets/Research Group/Angshuman1.jpg';
import sub4 from '../../assets/Research Group/Sohrab20241.jpg';


import './ResCard.css';

function ResCard() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .position {
                font-weight: 600;
                text-align: center;
                margin-top: 10px;
            }
            .fw-normal {
                font-weight: 500;
                font-size: 1.6rem;
            }
            .two-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2rem; /* Horizontal gap between cards */
                margin-bottom: 0.1rem; /* Vertical spacing between rows */
            }
            .center-container {
                padding-top: 20px;
                padding-bottom: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem; /* Vertical spacing between sections */
            }
            .pgraph {
                font-family: 'Roboto';
                width: 100%;
                max-width: 300px;
                text-align: center;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 100%;
                max-width: 300px;
                margin: 1rem;
            }
            h1.position {
                margin-top: 20px;
                margin-bottom: 1rem;
            }
            @media screen and (max-width: 768px) {
                .container {
                    flex-direction: column;
                    align-items: center;
                }
            }
          `,
        }}
      />
      {/* OCs */}
      <div className="center-container">
        <h1 className="position">PhD Foreign TA</h1>
        <MyCard img={sub1} lnk={'https://www.linkedin.com/in/naser-hassan-b66a8a298'} />
        <h2 className="fw-normal">Naser khaleel</h2>
        <p>Assessment of the market demand for CAV</p>
      </div>

 

      {/* Subsystem Heads */}
      <h1 className="position">PhD Candidates</h1>
      <div className="two-container row">
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/aaditi-kumari-84a242254/'} img={oc} />
          <h2 className="fw-normal"> Aaditi Kumari</h2>
          <p>V2I communication, Transport Safety and Sustainability </p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/parth-loya-543b10328/'} img={sub2} />
          <h2 className="fw-normal">Parth Loya</h2>
          <p>Effect of drunken ride on motorcycle behavior</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/angshuman-baruah-09'} img={sub3} />
          <h2 className="fw-normal">Angshuman Baruah</h2>
          <p>Intelligent Transportation System, Connected Vehicle, Traffic Safety</p>
        </div>
        <div className="card-content col-lg-4">
          <MyCard lnk={'https://www.linkedin.com/in/sohrab-yusuf-shaikh-5073942b4/'} img={sub4} />
          <h2 className="fw-normal">Sohrab Yusuf Shaikh</h2>
          <p>Road Safety, Driver Behaviour</p>
        </div>

      </div>




    </>
  );
}

export default ResCard;

