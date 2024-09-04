import logo from "../../assets/th.jpeg";
import logo2 from "../../assets/like-svgrepo-com.svg";
import person from '../../assets/person.jpg'
import MyCard from "../Alumni/CardTwist";

import './SedricaTeam.css'

function SedricaCard(){
    
    const managers = ['Person1', 'Person2', 'Person3', 'Person4']
    
    
    return(<>
        <h1 className="team">Our Team</h1>
        <div className="container image">
            <h1 className="title-heading">OC</h1>
            <div className="col-12 imcol">
                <img className="team-member" src={person}></img>
                <h3 className="title-name">Person 1</h3>
            </div>
            <hr/>
            <h1 className="title-heading">Team Leads</h1>
            <div className="row">
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
            </div>
            <hr/>
            <h1 className="title-heading">Subsystems</h1>
            <div className="row">
                <div className="col-lg-4">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-4">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-4">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
            </div>
            <hr/>
            <h1 className="title-heading">Sophies</h1>
            <div className="row">
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
            </div>
            <hr/>

            <h1 className="title-heading">Business Team</h1>
            <div className="row">
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
                <div className="col-lg-3">
                    <img className="team-member" src={person}></img>
                    <h3 className="title-name">Person 1</h3>
                </div>
            </div>
            
            
        </div>
    </>
    );
};

export default SedricaCard