import MyCard from "../Alumni/CardTwist";

import oc from '../../assets/people/oc.jpg'
import lead1 from '../../assets/people/lead1_new.jpg'
import lead2 from '../../assets/people/lead2_new.jpg'
import hoo from '../../assets/people/hoo_new.jpg'

import sub1 from '../../assets/people/percep_subsys_head.jpg'
import sub2 from '../../assets/people/percep_subsys_head_2_new.png'
import sub3 from '../../assets/people/mecha_subsys_head.jpg'
import sub4 from '../../assets/people/control_subsy_head_new.JPG'
import sub5 from '../../assets/people/motion_planning_subsys_head_new.jpg'


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
            <MyCard img={oc}/>
            <h2 className="fw-normal">Atharva Kulkarni</h2>
            <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>
        {/* Team Leads */}
        <h1 className="position">Team Leads</h1>
        <div className="two-container">
            <div className="card-content">
                <MyCard img={lead1}/>
                <h2 className="fw-normal">Aman Badave</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="card-content">
                <MyCard img={lead2}/>
                <h2 className="fw-normal">Aryan Mishra</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            
        </div>
        {/* Head of operations */}
        <div className="center-container">
            <h1 className="position">Head of Operations</h1>
            <MyCard img={hoo}/>
            <h2 className="fw-normal">Areeb Asgar</h2>
            <p className="pgraph">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        </div>


        {/* Subsystem Heads */}
        <h1 className="position">Subsystem Heads</h1>
        <div className="container">
            <div className="card-content">
                <MyCard img={sub1}/>
                <h2 className="fw-normal">Kshitij Vaidya</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="card-content">
                <MyCard img={sub2}/>
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div className="card-content">
                <MyCard img={sub3}/>
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
            <div className="card-content">
                <MyCard img={sub4}/>
                <h2 className="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the third column.</p>
            </div>
            <div className="card-content">
                <MyCard img={sub5}/>
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

        </div>
    </>
    );
};

export default SedricaCard