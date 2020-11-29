import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadePageThirdPage = (props) => {
return ( <Container>
    <p>Required</p>
    <h1>Not Offered Details</h1>
    <h3>38. If NO, please state reasons:</h3>
    <TextBox/>


    <Col><UCPButton></UCPButton></Col>
    <Col><UCPButton></UCPButton></Col>
    
 </Container>
)
}

export default ClearingOfferMadePageThirdPage;