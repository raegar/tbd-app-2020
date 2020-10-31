import React from 'react';
import './Calendar.css';
import UCPButton from '../Buttons/UCPButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
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

 


export default function Calendar (){
 
 
     return (

      <Container className="">
           <table>
        <th><UCPButton className="largebutton" buttonText="Week Commencing 26/10/2020"/></th>
        <th><UCPButton className="largebutton" buttonText="Week Commencing 2/11/2020"/></th>
        <th><UCPButton className="largebutton" buttonText="Week Commencing 9/11/2020"/></th>
        <th><UCPButton className="largebutton" buttonText="Week Commencing 16/11/2020"/></th>
        </table> 
     
      <table>
     
        <th><UCPButton className="mediumbutton" buttonText="Monday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Tuesday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Wednesday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Thursday"/></th>
        <th><UCPButton className="mediumbutton" buttonText="Friday"/></th>
      
      </table>
      <DropdownMenu className="Dropdown" options = {options}/>
    </Container>
     )
 
};