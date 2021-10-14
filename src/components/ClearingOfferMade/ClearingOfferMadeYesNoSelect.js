import React, {useState} from "react";
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

const offerOptions = [
	{
		label: "Yes", 
		id: "offerYes", 
		value: "Yes" 
	},
	{
		label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", 
		id: "offerYesPart", 
		value: "yespart" 
	},
	{
		label: "Yes (Subject to Ell Status)", 
		id:"Status", 
		value: "yesstatus" 
	},
	{ 
		label: "No", 
		id: "offerNo",
		value: "No" 
	},
	{ 
		label: "Interview Required (this may be due to students having industry experience rather than qualifications)", 
		id: "offerInterviewRequired", 
		value: "InterviewRequired" 
	},
	{ 
		label: "RPA (Highlight this with Emma Cave or Zoe", 
		id: "offerInterviewRequiredHighlight", 
		value: "RPARequired" 
	}      
];

function ClearingOfferMadeYesNoSelect() {
	const [whenNo, setWhenNo] = useState(false);
	const [whenRPA, setWhenRPA] = useState(false);
	const [whenInterview, setWhenInterview] = useState(false);
	
	function handleWhenClick(v) {
    	switch (v) {
    		case 'No':
    			setWhenNo(true);
    			setWhenRPA(false);
    			setWhenInterview(false);
    			break;
                
    		case 'RPARequired':
    			setWhenRPA(true);
    		    setWhenNo(false);
    			setWhenInterview(false);
    			break;

    	    case 'InterviewRequired':
    			setWhenRPA(false);
    			setWhenNo(false);
    			setWhenInterview(true);
    			break;
                
    		default:
    			setWhenNo(false);
    			setWhenRPA(false);
    			setWhenInterview(false);
    	}
	}

	function saveSelectedData() {
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
				<Col>
					<UCPButton to='/ClearingOfferMade'
						primary="True"
						className="mediumbutton"
						buttonText="Go Back"
						href="/ClearingOfferMade"
					/>
				</Col>
				
				<Col>
					<div id="confirmButton" onClick={saveSelectedData}>
						<UCPButton to='/ClearingOfferMadeFifthPage'
							primary="True"
							className="mediumbutton"
							buttonText="Confirm and Continue"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ClearingOfferMadeYesNoSelect;