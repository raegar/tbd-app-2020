import React from "react";

import RadioButton from "../RadioButton/RadioButton";
import TextBox from "../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import {isMobile} from 'react-device-detect';

const ClearingOfferMadeSecondPage = (props) => {

    var offerOptions = [
        { label: "Yes", id: "offerYes", value: "yes" },
        { label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", id: "offerYesPart", value: "yespart" },
        { label: "Yes (Subject to Ell Status)", id: "offerYesSubjectToStatus", value: "yesstatus" },
        { label: "No", id: "offerNo", value: "no" },
        { label: "Interview Required (this may be due to students having industry experience rather than qualifications) O RPA (Highlight this with Emma Cave or Zoe)", id: "offerInterviewRequired", value: "interviewrequired" },
        { label: "RPA (Highlight this with Emma Cave or Zoe", id: "offerInterviewRequired", value: "interviewrequired" },

        
      ];
<Container>
<h1>Offer</h1>
    <h1>* Required</h1>
<h3>37. Offer made? (YES/NO)</h3>
<p><i>Only UNCONDITIONAL Offers can be made (unless interview is needed)</i></p>
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