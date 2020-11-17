import React from 'react';
import './Disclaimer.css';
import UCPButton from '../Buttons/UCPButton'
  


function Disclaimer(props) {

    function HandelClick(){     
        
        
        if(document.getElementById('nameinput') !== undefined){
            document.getElementById('nameinput').removeAttribute('disabled');
            document.getElementById('emailinput').removeAttribute('disabled');
            document.getElementById('telinput').removeAttribute('disabled');
            document.getElementById('dobinput').removeAttribute('disabled');
            document.getElementById('ucasinput').removeAttribute('disabled');

            document.getElementById('UK').removeAttribute('disabled');
            document.getElementById('EU').removeAttribute('disabled');
            document.getElementById('Other').removeAttribute('disabled');

            document.getElementById('crimeYes').removeAttribute('disabled');
            document.getElementById('crimeNo').removeAttribute('disabled');

            document.getElementById('supportYes').removeAttribute('disabled');
            document.getElementById('supportNo').removeAttribute('disabled');

            document.getElementById('acceptButton').setAttribute("hidden", true);
        }
    }
    var disclaimer;
    if(global.userType === "student")
    {
        disclaimer = {
            title: "Privacy Statement",
            intro: "",
            body: "We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us. Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing hello@ucp.ac.uk"
        }
    }
    else{
        disclaimer = {
            title: "Hello " + global.staffFirstName + ", Please Read!",
            intro: "Hello you're through to the University Centre Peterborough Clearing Team - how can I help?",
            body: "We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us. Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing hello@ucp.ac.uk"
        }
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
