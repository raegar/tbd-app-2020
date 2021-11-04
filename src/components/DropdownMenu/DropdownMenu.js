import React from 'react';
import './DropdownMenu.css';
import {isMobile} from 'react-device-detect';
import {Subjects} from '../../global/Constants';

function DropdownMenu({id, placeholder, options, onSelect, disabled, ...props}) {
  	let dropdownClassName = isMobile ? "MobileDropdown" : "Dropdown";

  	return (
  		<select id={id} 
  			className={dropdownClassName}
			onChange={onSelect}
			disabled={disabled}
		>
  			<option value="">{placeholder}</option>
  			{options.map((value, i) => (
  				<option key={i} value={value.value}>{value.label}</option>
  			))}
  		</select>
  	);
}

DropdownMenu.defaultProps = {
	options: Subjects
};

export default DropdownMenu;