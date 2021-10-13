import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col , Row} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";

class ClearingOfferMadeInterviewRPA extends React.Component {
    render = () => {
    	return (
    		<Container>
    			<p>Required</p>
    			<h1>Interview or RPA required</h1>
    			<p>Enter any details for decision made</p>
    			<h3>39. Please state reasons:</h3>
        
    			<TextBox/>
    			<Row>
    				<Col>
    					<br></br>
    					<UCPButton to='/ClearingOfferMadeSecondPage'
    						primary="True"
    						className="mediumbutton"
    						buttonText="Go Back"
    						href="/ClearingOfferMadeSecondPage"
    					/>
    				</Col>
    				<Col>
    					<br></br>
    					<UCPButton to='/ClearingOfferMadeFifthPage'
    						primary="True"
    						className="mediumbutton"
    						buttonText="Confirm and Continue"
    						href="/ClearingOfferMadeFifthPage"
    					/>
    				</Col>
    			</Row>
    		</Container>
    	);
    }
}

export default ClearingOfferMadeInterviewRPA;