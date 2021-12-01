import React, {useState} from 'react';
import './UcasCalculator.css';
import {UCASGrades} from '../../global/Constants';
import TextBox from '../TextBox/TextBox';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import {Container, Row, Col} from "react-bootstrap";

function UcasCalculator() {
	//const [selectedGrades, setSelectedGrades] = useState([{}]);
	const [gradeOptions, setGradeOptions] = useState([]);

	function gradesOptions() {
		const options = [];

		for (const name in UCASGrades) {
			//first add the disabled bold section option
			options.push(<option disabled className="gradeTypeHeader">{name}</option>);

			//now add each subgrade type
			for (const subgradeName in UCASGrades[name]) {
				options.push(<option value={UCASGrades[name][subgradeName]}>{"  " + subgradeName}</option>);
			}
		}

		return options;
	}

	function selectGradeType(e) {
		console.log(JSON.stringify(e.target.value));
		setGradeOptions(e.target.value);
	}

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<select id={"grades"} onChange={selectGradeType}>
							<option disabled selected="selected">Please select a qualification...</option>
							{gradesOptions()}
						</select>
					</Col>
				</Row>
				<Row>
					<Col>
						<TextBox placeholder="Subject (optional)"/>
					</Col>
					<Col>
						<DropdownMenu options={
							gradeOptions.map((option, i) => {
								return {
									label: option.grade,
									value: option.points
								};
							})
						}/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

//<iframe src="https://www.ucas.com/ucas/tariff-calculator"></iframe>
export default UcasCalculator;