import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col , Row} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadeFourthPage = (props) => {
return (<Container>
<p>Required</p>
    <h1>Interview or RPA required</h1>
    <p>Enter any details for decision made</p>
    <h3>39. Please state reasons:</h3>


    <TextBox/>
<Row>

    <Col><br></br><UCPButton to='/ClearingOfferMadeSecondPage'
                primary="True"
                className="mediumbutton"
                buttonText="Go Back"
                href="/ClearingOfferMadeSecondPage"></UCPButton></Col>
    <Col><br></br><UCPButton to='/ClearingOfferMadeFifthPage'
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Continue"
                href="/ClearingOfferMadeFifthPage"></UCPButton></Col>
                </Row>
 </Container>
 
)
}
export default ClearingOfferMadeFourthPage;