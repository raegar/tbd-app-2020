import React, {useState} from 'react';
import './UcasCalculator.css';
import {UCASGrades} from '../../global/Constants';
import {TextBox} from '../TextBox/TextBox';
import {DropdownMenu} from '../DropdownMenu/DropdownMenu';
import {Container, Row, Col} from "react-bootstrap";

function UcasCalculator() {
	//const [selectedGrades, setSelectedGrades] = useState([{}]);
	const [gradeOptions, setGradeOptions] = useState([]);

	function gradesOptions() {
		const options = [];

		for (const name of Object.keys(UCASGrades)) {
			//first add the disabled bold section option
			options.push(<option disabled className="gradeTypeHeader">{name}</option>);

			//now add each subgrade type
			for (const subgradeName of Object.keys(UCASGrades[name])) {
				options.push(<option value={UCASGrades[name][subgradeName]}>{"  " + subgradeName}</option>);
			}
		}

		return options;
	}

	function selectGradeType(e) {
		setGradeOptions(e.target.value);
	}

	return (
		<div>
			<Container>
				<Row>
					<select id={"grades"} onChange={selectGradeType}>
						{gradesOptions()}
					</select>
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