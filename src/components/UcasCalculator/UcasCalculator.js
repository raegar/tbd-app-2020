import React, {useState} from 'react';
import './UcasCalculator.css';
import {UCASGrades} from '../../global/Constants';
import TextBox from '../TextBox/TextBox';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import {Container, Row, Col} from "react-bootstrap";

function UcasCalculator() {
	const [selectedGrades, setSelectedGrades] = useState([{name: "", points: 0}]);
	const [gradeOptions, setGradeOptions] = useState([]);

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

	function selectGradeType(e) {
		const split = e.target.value.split(";");
		const name = split[0];
		const subgradeName = split[1];
		const data = UCASGrades[name][subgradeName];

		setGradeOptions(data);
	}

	function changeSubjectName(e, index) {
		let gradesCopy = selectedGrades;
		gradesCopy[index].name = e.target.value;
		console.log("subject change");
		setSelectedGrades(gradesCopy);
	}

	function selectGrade(e, index) {
		let gradesCopy = selectedGrades;
		console.log(e.target.value);

		if (!gradesCopy[index]) {
			gradesCopy[index] = {name: "", points: parseInt(e.target.value)};
		} else {
			gradesCopy[index].points = parseInt(e.target.value);
		}

		setSelectedGrades(gradesCopy);
		console.log(JSON.stringify(selectedGrades));
		console.log(selectedGrades[index].points);
	}

	function totalPoints() {
		let sum = 0;

		for (let i = 0; i < selectedGrades.length; i++) {
			sum += selectedGrades[i].points;
		}

		console.log("sum");

		return sum;
	}

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<select id={"qualifications"} onChange={selectGradeType}>
							<option disabled selected="selected">Please select a qualification...</option>
							{gradesOptions()}
						</select>
					</Col>
				</Row>
				<Row>
					<Col>
						<TextBox placeholder="Subject (optional)" onChange={(e) => changeSubjectName(e, 0)}/>
					</Col>
					<Col>
						<DropdownMenu 
							options={gradeOptions.length > 0 ?
								gradeOptions.map((option, i) => {
									return {
										label: option.grade,
										value: option.points
									};
								}) 
								: [{label: "...", value: "none"}]
							}
							disabled={gradeOptions.length <= 0}
							onSelect={(e) => {
								console.log("test"); 
								selectGrade(e, 0);
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col/>
					<Col>
						<span>Points <b>{selectedGrades[0]?.points}</b></span>
					</Col>
				</Row>
				<span>Total points <b>{totalPoints()}</b></span>
			</Container>
		</div>
	);
}

//<iframe src="https://www.ucas.com/ucas/tariff-calculator"></iframe>
export default UcasCalculator;