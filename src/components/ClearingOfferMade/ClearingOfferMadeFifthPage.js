import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadeFifthPage = (props) => {
return ( <Container>
    <h1>Before hanging up....</h1>
    <p>Please state the following</p>
    <h3>40. Please confirm email offer will be send to</h3>
    <TextBox/>
    <h3>41. Please enter course applied for</h3>
    <TextBox/>



<Col><UCPButton></UCPButton></Col>
    <Col><UCPButton></UCPButton></Col>
 </Container>
)
}
export default ClearingOfferMadeFifthPage;