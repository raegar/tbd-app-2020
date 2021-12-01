import React, {useState} from 'react';
import './UcasCalculator.css'
import { UCASGrades } from '../../global/Constants';
import {Container} from 'react-bootstrap';
import {TextBox} from '../TextBox/TextBox';
import {DropdownMenu} from '../DropdownMenu/DropdownMenu';

function UcasCalculator() {
    //const [selectedGrades, setSelectedGrades] = useState([{}]);
    return (
        <Container>
            <select>
                <option name="Test" value="Test"/>
            </select>
            <TextBox placeholder="Subject (optional)"/>
            <DropdownMenu/>
        </Container>
    );
}

export default UcasCalculator;