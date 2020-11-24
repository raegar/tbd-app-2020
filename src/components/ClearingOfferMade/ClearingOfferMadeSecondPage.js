import React from "react";

import RadioButton from "../RadioButton/RadioButton";

import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import {isMobile} from 'react-device-detect';

const ClearingOfferMadeSecondPage = (props) => {

    var offerOptions = [
        { label: "Yes", id: "crimeYes", value: "yes" },
        { label: "No", id: "crimeNo", value: "no" },
      ];
<Container>
<RadioButton
    heading="Learning Support"
    options={supportOptions}
    name="support"
    subtitle="Do you have any additional learning support needs or disabilities?"
    attribute="disabled"
  />





<Row>
<Col><UCPButton></UCPButton></Col>
<Col><UCPButton></UCPButton></Col>
</Row>
 </Container>

}
export default ClearingOfferMadeSecondPage;