import React from 'react'
import './DropdownMenu.css'



function DropdownMenu(props) {
  return (
  <select id={props.id} 
  className="Dropdown" 
  onChange={props.onChange}>
    <option value="">{props.placeholder}</option>
      {props.options.map((value, i) => (
        <option key={i} value={value.value}>{value.label}</option>
      ))}
  </select>
  );
}
export default DropdownMenu;

DropdownMenu.defaultProps = {
  
    options:[
      { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
      { value: 'criminoloy', label: 'BA (Hons) Crimonology'},
      { value: 'digitalArts', label: 'FDA Digital Arts'}
    ]
};

