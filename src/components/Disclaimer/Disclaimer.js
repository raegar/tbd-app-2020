import React from 'react';
import './Disclaimer.css';
import UCPButton from '../Buttons/UCPButton'
function Disclaimer() {
    return (
        <div className="Disclaimer">

<br></br>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"></link>
<form action="https://canvas.anglia.ac.uk/courses/17176/modules">
<div className="disclaimer" data-testid="ucpDisclaimer">
 <p>  <b>PRIVACY STATEMENT:</b><br></br> We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us.<br></br> Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing <a href="mailto:hello@ucp.ac.uk" className="text">hello@ucp.ac.uk</a></p> 
<UCPButton primary="True" className="tealbutton" buttonText="close"/>
</div>
</form>

</div>
    )
    }

export default Disclaimer;
