import React, { useState } from "react";
import "./LevelThreeQualifications.css";
import RadioButton from '../RadioButton/RadioButton';
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
var l3QualificationsOptions = [
  { label: "Yes", id: "qualificationYes", value: "yes" },
  { label: "No", id: "qualificationNo", value: "no" },
];
const LevelThreeQualifications = () => {
  const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";
  const [value, setValue] = useState("");
  const [emptyInput, setClearInput] = useState(false);
  const [counter, setCounter] = useState(1);
  const handleChange = event => {
    console.log(event.target.value);
    if (event.target.value === 'no') {
      setCounter(6);
      setValue(event.target.value);
      
    }
    else {
      setClearInput(true);
      setCounter(counter + 1);
    }
  }
  const className1 = isMobile ? "l3-mobile-form-right" : "l3-form-right";
  return (
    
    <div className={className2}>
      <div className="form-background">
        <h3 className="form-title">Level 3 Qualifications</h3>
        {counter < 6 ?
          <div className={className1}>
            <L3Component id={counter} clearInput= {emptyInput}  />
              <p>Other L3 Qualifications</p>
              <RadioButton
                options={l3QualificationsOptions}
                name="l3qualifications"
                value={value}
                onChange={handleChange}
              />
          </div>
          : <div>Next Page </div>}
      </div>
    </div>
  );

};

export default LevelThreeQualifications;
