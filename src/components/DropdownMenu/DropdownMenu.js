import React from 'react';
import './DropdownMenu.css';
import {isMobile} from 'react-device-detect';

class DropdownMenu extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

  render = () => {
  	let dropdownClassName;
  	if (isMobile) {
  		dropdownClassName = "MobileDropdown";
  	} else {
  		dropdownClassName = "Dropdown";
  	}  

  	return (
  		<select id={this.props.id} 
  			className={dropdownClassName} >
  			<option value="">{this.props.placeholder}</option>
  			{this.props.options.map((value, i) => (
  				<option key={i} value={value.value}>{value.label}</option>
  			))}
  		</select>
  	);
  }
}

DropdownMenu.defaultProps = {
	options:[
		{ value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
		{ value: 'criminoloy', label: 'BA (Hons) Crimonology'},
		{ value: 'digitalArts', label: 'FDA Digital Arts'}
	]
};

export default DropdownMenu;