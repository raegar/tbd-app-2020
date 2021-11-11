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
function ClearingOfferMadeYesNoSelect() {
	const [state, setState] = useState({
		whenNo: false,
		whenRPA: false,
		whenInterview: false,
	});
	const [offerYesState, setOfferYesState] = useState({
		checked: false,
		value: ""
	});
	const [offerYesPartState, setOfferYesPartState] = useState({
		checked: false,
		value: ""
	});
	const [offerYesEllStatusState, setOfferYesEllStatusState] = useState({
		checked: false,
		value: ""
	});
	const [offerNoState, setOfferNoState] = useState({
		checked: false,
		value: ""
	});
	const [offerInterviewRequiredState, setOfferInterviewRequiredState] = useState({
		checked: false,
		value: ""
	});
	const [offerInterviewRequiredHighlightState, setOfferInterviewRequiredHighlightState] = useState({
		checked: false,
		value: ""
	});

	//State setter methods start
	function onOfferYesChanged(e) {
		setOfferYesState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onOfferYesPartChanged(e) {
		setOfferYesPartState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onOfferYesEllStatusChanged(e) {
		setOfferYesEllStatusState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onOfferNoChanged(e) {
		setOfferNoState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onOfferInterviewRequiredChanged(e) {
		setOfferInterviewRequiredState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onOfferInterviewRequiredHighlightChanged(e) {
		setOfferInterviewRequiredHighlightState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	//State setter methods end

	/*I don't like putting a const here in the middle of the methods but using a method
	  before it's defined is bad practice, even if JS allows it. I could do lambdas but
	  that makes it less readable and is thus also bad practice.*/
	const offerOptions = [
		{
			label: "Yes", 
			id: "offerYes", 
			value: "Yes",
			handleChange: onOfferYesChanged
		},
		{
			label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", 
			id: "offerYesPart", 
			value: "yespart",
			handleChange: onOfferYesPartChanged
		},
		{
			label: "Yes (Subject to Ell Status)", 
			id:"Status", 
			value: "yesstatus",
			handleChange: onOfferYesEllStatusChanged
		},
		{ 
			label: "No", 
			id: "offerNo",
			value: "No",
			handleChange: onOfferNoChanged
		},
		{ 
			label: "Interview Required (this may be due to students having industry experience rather than qualifications)", 
			id: "offerInterviewRequired", 
			value: "InterviewRequired",
			handleChange: onOfferInterviewRequiredChanged
		},
		{ 
			label: "RPA (Highlight this with Emma Cave or Zoe", 
			id: "offerInterviewRequiredHighlight", 
			value: "RPARequired",
			handleChange: onOfferInterviewRequiredHighlightChanged
		}      
	];
	
	function handleWhenClick(v) {
    	switch (v) {
    		case 'No':
    			setState({
    				whenNo: true,
    				whenRPA: false,
    				whenInterview: false,
    			});
    			break;
                
    		case 'RPARequired':
    			setState({
    				whenNo: true,
    				whenRPA: false,
    				whenInterview: false,
    			});
    			break;

    	    case 'InterviewRequired':
    			setState({
    				whenNo: false,
    				whenRPA: false,
    				whenInterview: true,
    			});
    			break;
                
    		default:
    			setState({
    				whenNo: false,
    				whenRPA: false,
    				whenInterview: false,
    			});
    	}
	}

	function saveSelectedData() {
    	if (offerYesState.checked) {
    		global.ApplicationFormData.offerMade = offerYesState.value;
    	}

    	if (offerYesPartState.checked) {
    		global.ApplicationFormData.offerMade = offerYesPartState.value;
    	}    

    	if (offerYesEllStatusState.checked) {
    		global.ApplicationFormData.offerMade = offerYesEllStatusState.value;
    	}

    	if (offerNoState.checked) {
    		global.ApplicationFormData.offerMade = offerNoState.value;
    	}

    	if (offerInterviewRequiredState.checked) {
    		global.ApplicationFormData.offerMade = offerInterviewRequiredState.value;
    	}

    	if (offerInterviewRequiredHighlightState.checked) {
    		global.ApplicationFormData.offerMade = offerInterviewRequiredHighlightState.value;
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
    <div id="confirmButton" onClick={saveSelectedData}>
        <UCPButton to='/ClearingOfferMadeFifthPage'
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