import React from "react";
import "./LevelThreeQualifications.css";
import RadioButton1 from '../RadioButton/RadioButton1';
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
import {Row, Col, Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import UCPButton from '../Buttons/UCPButton';

const l3QualificationsOptions = [
	{ label: "Yes", id: "qualificationYes", value: "yes" },
];

class LevelThreeQualifications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			emptyInput: false,
			counter: 1
		};
	}

  setValue = (value) => {
  	this.setState({value: value});
  }

  setClearInput = (input) => {
  	this.setState({emptyInput: input});
  }

  setCounter = (counter) => {
  	this.setState({counter: counter});
  }

  handleChange = (event) => {
  	console.log(event.target.value);
  	if (event.target.value === 'no') {
  		this.setCounter(6);
  		this.setValue(event.target.value);
  	} else {
  		this.setClearInput(true);
  		this.setCounter(this.state.counter + 1);
  		this.SaveSelectedData();
  	}
  }

  saveSelectedData = () => {
  	//TODO: Fix to make more Reacty and not horrible bad raw HTML method
  	global.ApplicationFormData.levelThreeQualifications.qual[this.state.counter-1] = 
      document.getElementById("qualification" + this.state.counter).value;
  	global.ApplicationFormData.levelThreeQualifications.subject[this.state.counter-1] = 
      document.getElementById("subject" + this.state.counter).value;
  	global.ApplicationFormData.levelThreeQualifications.grade[this.state.counter-1] = 
      document.getElementById("grade" + this.state.counter).value;
  	global.ApplicationFormData.levelThreeQualifications.date[this.state.counter-1] = 
      document.getElementById("year" + this.state.counter).value;

  	console.log(global.ApplicationFormData);
  }

  render = () => {
  	const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";
  	const className1 = isMobile ? "l3-mobile-form-right" : "l3-form-right";

  	return (
  		<Container>
  			<div className={className2}>
  				<div className="form-background">
          
  					{this.state.counter < 6 ?
  						<div className={className1}>
  							<h3 className="form-title">Level 3 Qualifications</h3>
  							<L3Component id={this.state.counter} clearInput={this.state.emptyInput}/>
  							<br/>
  							<h5>Other L3 Qualifications</h5>
  							<RadioButton1
  								options={l3QualificationsOptions}
  								name="l3qualifications"
  								value={this.state.value}
  								onChange={this.handleChange}
  							/>
  						</div>
  						: <Redirect  to={{pathname: "/DegreeQualifications"}} />}
  				</div>
  				<Row id="buttonRow">
  					<Col className="centered-buttons">
  						<UCPButton to='/LevelTwoQualifications'
  							primary="True"
  							className="mediumbutton"
  							buttonText="Go Back"
  						/>
  					</Col>
  					<Col className="centered-buttons">
  						<div id="confirmButton" onClick={this.saveSelectedData}>
  							<UCPButton
  								to="/DegreeQualifications"
  								primary="True"
  								className="mediumbutton"
  								buttonText="Confirm and Go"
  							/>
  						</div>
  					</Col>
  				</Row>
  			</div>
  		</Container>
  	);
  }
}

export default LevelThreeQualifications;
