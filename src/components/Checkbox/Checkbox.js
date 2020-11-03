import React from 'react';
import './Checkbox.css';

export default class Checkbox extends React.Component{
    render(){
        return (    
        
            <div class="labelposition">    <br></br>
                  <input className="checkbox" type="checkbox" id="checkboxexample" name="checkboxexample" value="Option"/>
                  <div class="checkboxposition">
            <label class="container">First Checkbox</label>
            </div>           
            </div>


            )
        }
    };