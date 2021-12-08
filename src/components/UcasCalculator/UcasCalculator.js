import React, {useState} from 'react';
import './UcasCalculator.css';
import {UCASGrades} from '../../global/Constants';
import TextBox from '../TextBox/TextBox';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import {Container, Row, Col} from "react-bootstrap";
import UCPButton from '../Buttons/UCPButton';

function UcasCalculator() {
	const [selectedGrades, setSelectedGrades] = useState([{name: "", points: 0}]);
	const [gradeOptions, setGradeOptions] = useState([]);
	const [gradesCount, setGradesCount] = useState(1);

	function gradesOptions() {
		const options = [];

		for (const name in UCASGrades) {
			//first add the disabled bold section option
			options.push(<option disabled className="gradeTypeHeader">{name}</option>);

			//now add each subgrade type
			for (const subgradeName in UCASGrades[name]) {
				options.push(<option value={name + ";" + subgradeName}>{"  " + subgradeName}</option>);
			}
		}

		return options;
	}

	function selectGradeType(e, index) {
		const split = e.target.value.split(";");
		const name = split[0];
		const subgradeName = split[1];
		const data = UCASGrades[name][subgradeName];

		const gradeOptionsCopy = gradeOptions;
		gradeOptionsCopy[index] = data;

		setGradeOptions([...gradeOptionsCopy]);
	}

	function changeSubjectName(e, index) {
		let gradesCopy = selectedGrades;
		gradesCopy[index].name = e.target.value;
		setSelectedGrades(gradesCopy);
	}

	function selectGrade(e, index) {
		let gradesCopy = selectedGrades;

		if (!gradesCopy[index]) {
			gradesCopy[index] = {name: "", points: parseInt(e.target.value)};
		} else {
			gradesCopy[index].points = parseInt(e.target.value);
		}

		setSelectedGrades([...gradesCopy]);
	}

	function totalPoints() {
		let sum = 0;

		for (let i = 0; i < selectedGrades.length; i++) {
			sum += selectedGrades[i].points;
		}

		return sum;
	}

	function generateUcasGrades() {
		let grades = [];

		for (let i = 0; i < gradesCount; i++) {
			grades.push(
				<Row>
					<Col>
						<select id={"qualifications"} onChange={(e) => selectGradeType(e, i)} className="qualInputBox">
							<option disabled selected="selected">Please select a qualification...</option>
							{gradesOptions()}
						</select>
					</Col>
				</Row>
			);
			grades.push(
				<Row>
					<Col md={2}>
						<TextBox 
							placeholder="Subject (optional)" 
							onChange={(e) => changeSubjectName(e, i)} 
							className="subjectInputBox"
						/>
					</Col>
					<Col md={4}>
						<br/>
					</Col>
					<Col md={2}>
						<br/>
						<DropdownMenu 
							options={gradeOptions.length > 0 && gradeOptions[i] ?
								gradeOptions[i].map((option, j) => {
									return {
										label: option.grade,
										value: option.points
									};
								}) 
								: [{label: "...", value: "none"}]
							}
							disabled={gradeOptions.length <= 0}
							onSelect={(e) => selectGrade(e, i)}
							className="gradeSelect"
						/>
					</Col>
				</Row>
			);
			grades.push(
				<Row>
					<Col md={6}/>
					<Col>
						<span className="qualPoints" data-testid="qualPoints">Points: <b>{selectedGrades[i]?.points}</b></span>
					</Col>
				</Row>
			);
			grades.push(<br/>);
		}

		return grades;
	}

	function addButton() {
		const selectedGradesCopy = selectedGrades;
		selectedGradesCopy[gradesCount] = {name: "", points: 0};
		setSelectedGrades([...selectedGradesCopy]);
		setGradesCount(gradesCount + 1);
	}

	return (
		<div>
			<Container>
				{generateUcasGrades()}
				<Row>
					<UCPButton 
						to="none"
						className="mediumbutton addQualButton" 
						onClick={addButton} 
						buttonText="Add another qualification"
					/>
				</Row>
				<span className="totalQualPoints">Total points: <b data-testid="totalPoints">{totalPoints()}</b></span>
			</Container>
		</div>
	);
}

//<iframe src="https://www.ucas.com/ucas/tariff-calculator"></iframe>
export default UcasCalculator;