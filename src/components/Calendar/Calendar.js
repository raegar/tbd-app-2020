import React from 'react';
import './Calendar.css';
import UCPButton from './UCPButton';
import DropdownMenu from './DropdownMenu';
import {Container} from 'react-bootstrap';

const options = [
  { value: '0', label: '9:00' },
  { value: '1', label: '10:00'},
  { value: '2', label: '11:00'},
  { value: '3', label: '12:00'},
  { value: '4', label: '13:00' },
  { value: '5', label: '14:00'},
  { value: '6', label: '15:00'},
  { value: '7', label: '16:00'},
]
export default class Calendar extends React.Component{
  
 render(){
     return (

     

      <Container>
      <DropdownMenu options/>
      <table>
     
        <th><UCPButton className="mediumbutton" buttonText="Monday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Tuesday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Wednesday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Thursday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Friday"/></th>
      
      </table>
    </Container>
     )
 }
};