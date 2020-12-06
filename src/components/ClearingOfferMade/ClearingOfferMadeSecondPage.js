import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import "./ClearingOfferMade2.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import {Redirect} from "react-router-dom";


/*
//var NAME = false;
function GetTestData(selectedValue) {
    if (selectedValue === "No") {
        NAME = true;
    }
};



function GetNextPage(){
  if(NAME)
  {
      return "/ClearingOfferMadeThirdPage";
  }
  else{

     return "/ClearingOfferMadeFourthPage";
};


}*/ 
const ClearingOfferMadeSecondPages = (props) => {
    const[whenNo, setWhenNo] = useState(false);
    const[whenRPA, setWhenRPA] = useState(false);
    const[whenInterview, setwhenInterview] = useState(false);

    function handleWhenClick(v) {
        if (v === 'No') {
            setWhenNo(true);
            setWhenRPA(false);
            setwhenInterview(false);
        } else if (v==="RPARequired"){
            setWhenRPA(true);
            setWhenNo(false);
            setwhenInterview(false);

        
        } else if (v==="InterviewRequired"){
            setWhenRPA(false);
            setWhenNo(false);
            setwhenInterview(true);

        }
        else  {
            setWhenNo(false);
            setWhenRPA(false);
            setwhenInterview(false);

        }
    }
    var offerOptions = [
        { label: "Yes", id: "offerYes", value: "Yes" },
        { label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", id: "offerYesPart", value: "yespart" },
        { label: "Yes (Subject to Ell Status)", id:"Status", value: "yesstatus" },
        { label: "No", id: "offerNo",value: "No" },
        { label: "Interview Required (this may be due to students having industry experience rather than qualifications)", id: "offerInterviewRequired", value: "InterviewRequired" },
        { label: "RPA (Highlight this with Emma Cave or Zoe", id: "offerInterviewRequiredHighlight", value: "RPARequired" }      
      ]
    ;
   

    function SaveSelectedData() {

        if (document.getElementById("offerYes").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("offerYes").value;
          }
          if (document.getElementById("offerYesPart").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("offerYesPart").value;
          }    

        if (document.getElementById("Status").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("Status").value;
        }
        if (document.getElementById("offerNo").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("offerNo").value;
        }
        if (document.getElementById("offerInterviewRequired").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("offerInterviewRequired").value;
        }
        if (document.getElementById("offerInterviewRequiredHighlight").checked) {
            global.ApplicationFormData.offerMade = document.getElementById("offerInterviewRequiredHighlight").value;
        }

    
        console.log(global.ApplicationFormData);
      }


return ( 

<Container>
<h1>Offer</h1>
    <h4>* Required</h4>
<h3>37. Offer made? (YES/NO)</h3>
<p><i>Only UNCONDITIONAL Offers can be made (unless interview is needed)</i></p>
<RadioButton
            heading="Yes"
            options={offerOptions}
            name="offer"
            oc={handleWhenClick}

           /*  oc={GetTestData()}
           onchange={GetNextPage()} */
  />

{
                (whenNo)
                ? <Redirect to={{ pathname: "/ClearingOfferMadeThirdPage" }} />
                
                : <span></span>
            }

{
                (whenRPA)
                ? <Redirect to={{ pathname: "/ClearingOfferMadeFourthPage" }} />
                
                : <span></span>
            }

{
                (whenInterview)
                ? <Redirect to={{ pathname: "/ClearingOfferMadeFourthPage" }} />
                
                : <span></span>
            }
<Row>
<Col><UCPButton to='/ClearingOfferMade'
                primary="True"
                className="mediumbutton"
                buttonText="Go Back"
                href="/ClearingOfferMade"></UCPButton></Col>
                
    <Col>
    <div id="confirmButton" onClick={SaveSelectedData}>
        <UCPButton to='/ClearingOfferMadeThirdPage'
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Continue"
                ></UCPButton>
    </div>
    </Col>
</Row>
</Container>
)
}
export default ClearingOfferMadeSecondPages;