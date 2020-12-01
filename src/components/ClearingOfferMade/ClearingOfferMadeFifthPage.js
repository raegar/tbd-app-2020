import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadeFifthPage = (props) => {
return ( <Container>
    <h1>Before hanging up....</h1>
    <p>Please state the following</p>
    <h3>40. Please confirm email offer will be send to</h3>
    <TextBox/>
    <h3>41. Please enter course applied for</h3>
    <TextBox/>

<Row>
    <Col><br></br><UCPButton to='/ClearingOfferMadeFourthPage'
                primary="True"
                className="mediumbutton"
                buttonText="Go Back"
                href="/ClearingOfferMadeFourthPage"></UCPButton></Col>
    <Col><br></br><UCPButton primary="True"
                className="mediumbutton"
                buttonText="Confirm and Continue"></UCPButton></Col>
                </Row>
 </Container>
)
}
export default ClearingOfferMadeFifthPage;