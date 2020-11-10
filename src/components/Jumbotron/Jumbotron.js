import React from 'react';
export const Jumbotron = ({ className, ...props}) =>  {
    return (
        <div className="jumbotron">
            <br></br>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"></link>
                    <form action="https://canvas.anglia.ac.uk/courses/17176/modules">
                        <div className="jumbotron" data-testid="jumbotron">
                            <p>  <b>PRIVACY STATEMENT:</b><br></br> We will only use your personal information to administer your application and / or enrolment and to provide the products and services you have requested from us.<br></br> Further information on our privacy policy can be found at https://www.ucp.ac.uk/privacy-and-cookies/ or by emailing <a href="mailto:hello@ucp.ac.uk" className="text">hello@ucp.ac.uk</a></p>
            </div>
        </form>
    </div>
    )
}
Jumbotron.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
className:PropTypes.string,
};


export default Jumbotron;

/* Example

<Jumbotron className="jumbotron"/> */
