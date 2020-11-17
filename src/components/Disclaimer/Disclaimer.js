import React from 'react';
import './Disclaimer.css';
import UCPButton from '../Buttons/UCPButton'

    

const staffDisclaimer = {
    title: "Please Read",
    intro: "Hello you're through to the University Centre Peterborough Clearing Team - how can I help?",
    body: "We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us. Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing hello@ucp.ac.uk"
}
const studentDisclaimer = {
    title: "Privacy Statement",
    intro: "",
    body: "We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us. Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing hello@ucp.ac.uk"
}

function Disclaimer(props) {

    function HandelClick(){     
        
        if(document.getElementById('confirmButton') !== undefined){
          document.getElementById('confirmButton').removeAttribute("hidden");
          document.getElementById('acceptButton').setAttribute("hidden", true);
        }
        if(document.getElementById('confirmButton1') !== undefined){
            document.getElementById('confirmButton1').removeAttribute("hidden");
            document.getElementById('confirmButton2').removeAttribute("hidden");
           
          }
    }
    var disclaimer;
    if(global.userType === "student")
    {
        disclaimer = studentDisclaimer; 
    }
    else{
        disclaimer = staffDisclaimer;
    }
    return (
        <div className="Disclaimer">
            <br></br>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"></link>
                    <form action="https://canvas.anglia.ac.uk/courses/17176/modules">
                        <div className="disclaimer" data-testid="ucpDisclaimer">
                        <p><b>{disclaimer.title}</b><br/><b>{disclaimer.intro}</b><br/>{disclaimer.body}</p> 
                <div id="acceptButton">        
                    <UCPButton primary="True" className="smallbutton" buttonText="Accept" onClick={HandelClick} to="none"/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Disclaimer;
