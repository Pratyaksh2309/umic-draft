import logo from "../../assets/th.jpeg";
import logo2 from "../../assets/like-svgrepo-com.svg";
import person from '../../assets/person.jpg'
import MyCard from "../Alumni/CardTwist";

import './SedricaTeam.css'

function SedricaCard(){
    
    const managers = ['Person1', 'Person2', 'Person3', 'Person4']
    
    
    return(<>
        <style
        dangerouslySetInnerHTML={{
          __html: `
            .position{
                font-family: 'Ubuntu';
                font-weight: 500;
                text-align: center;
                margin-top: 20px;
            }
            .fw-normal{
                font-family: 'Ubuntu';
                font-weight: 400;
            }

            .two-container{
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .center-container{
                padding-top: 30px;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                
                .pgraph{
                    font-family: 'Roboto';
                    width: 100%;
                    max-width: 300px; /* Adjust width for smaller screens */
                    text-align:center;
                }

            }
            .container {
              display: flex;
              justify-content: space-between;
              gap: 2rem;
              max-width: 80rem;
              margin: 0 auto;
              padding: 2rem;
            }
            .card-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              width: 100%;
              max-width: 300px; /* Adjust width for smaller screens */
              margin: 1rem;
            }
            @media screen and (max-width: 768px) {
              .container {
                flex-direction: column;
                align-items: center;
              }
            }
          `
        }}
      />
        {/* OCs */}
        
        <div className="center-container">
            <h1 className="position">OC</h1>
            <MyCard/>
            <h2 className="fw-normal">Heading</h2>
            <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>
        {/* Team Leads */}
        <h1 className="position">Team Leads</h1>
        <div className="two-container">
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
        </div>
        {/* Head of operations */}
        <div className="center-container">
            <h1 className="position">Head of Operations</h1>
            <MyCard/>
            <h2 className="fw-normal">Heading</h2>
            <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>


        {/* Subsystem Heads */}
        <h1 className="position">Subsystem Heads</h1>
        <div className="container">
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
        </div>

        {/* Sophies */}
        <h1 className="position">Sophies</h1>
        <div className="container">
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
            <div className="card-content">
                <MyCard />
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
        </div>
    </>
    );
};

export default SedricaCard