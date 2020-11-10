import React from 'react';
export const JumbotronComponent = ({ className, ...props }) => {
    return (
        <div className="jumbotron">
            <br></br>
            <div className="jumbotron" data-testid="jumbotroncomponent">
                <p><b>PRIVACY STATEMENT:</b><br></br> We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us.<br></br> Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing <a href="mailto:hello@ucp.ac.uk" className="text">hello@ucp.ac.uk</a></p>
            </div>
        </div>
    )
}

export default JumbotronComponent;

/* Example

<JumbotronComponent className="jumbotron"/> */
