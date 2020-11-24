import React from "react";

import RadioButton from "../RadioButton/RadioButton";

import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import {isMobile} from 'react-device-detect';

const ClearingOfferMadeSecondPage = (props) => {

    var offerOptions = [
        { label: "Yes", id: "offerYes", value: "yes" },
        { label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", id: "offerYesPart", value: "yespart" },
        { label: "Yes (Subject to Ell Status)", id: "offerYesSubjectToStatus", value: "yesstatus" },
        { label: "No", id: "crimeNo", value: "no" },
        { label: "No", id: "crimeNo", value: "no" },

        
      ];
<Container>
<RadioButton
    heading="Yes"
    options={supportOptions}
    name="offer"

    attribute="disabled"
  />





<Row>
<Col><UCPButton></UCPButton></Col>
<Col><UCPButton></UCPButton></Col>
</Row>
 </Container>

}
export default ClearingOfferMadeSecondPage;