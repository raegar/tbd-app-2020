import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadeFourthPage = (props) => {
return (<Container>
<p>Required</p>
    <h1>Interview requeired of RPA</h1>
    <p>Enter any details for decision made</p>
    <h3>39. Please state reasons:</h3>
    <TextBox/>



<Col><UCPButton></UCPButton></Col>
    <Col><UCPButton></UCPButton></Col>
 </Container>
)
}
export default ClearingOfferMadeFourthPage;