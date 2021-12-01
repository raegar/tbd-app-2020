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
						<select id={"qualifications"} onChange={(e) => selectGradeType(e, i)}>
							<option disabled selected="selected">Please select a qualification...</option>
							{gradesOptions()}
						</select>
					</Col>
				</Row>
			);
			grades.push(
				<Row>
					<Col>
						<TextBox placeholder="Subject (optional)" onChange={(e) => changeSubjectName(e, i)}/>
					</Col>
					<Col>
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
						/>
					</Col>
				</Row>
			);
			grades.push(
				<Row>
					<Col/>
					<Col>
						<span>Points <b>{selectedGrades[i]?.points}</b></span>
					</Col>
				</Row>
			);
		}

		return grades;
	}

	return (
		<div>
			<Container>
				{generateUcasGrades()}
				<Row>
					<UCPButton 
						to="none"
						className="mediumbutton" 
						onClick={() => setGradesCount(gradesCount + 1)} 
						buttonText="Add another qualification"
					/>
				</Row>
				<span>Total points <b>{totalPoints()}</b></span>
			</Container>
		</div>
	);
}

//<iframe src="https://www.ucas.com/ucas/tariff-calculator"></iframe>
export default UcasCalculator;