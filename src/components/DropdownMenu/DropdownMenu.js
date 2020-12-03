import React from 'react'
import Select from 'react-select'
import './DropdownMenu.css'



const DropdownMenu = ({options,onChange,id,...props}) => (

  <Select id={id} className="Dropdown" options={options} onChange={onChange}/>
)


export default DropdownMenu;

DropdownMenu.defaultProps = {
  
    options:[
      { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
      { value: 'criminoloy', label: 'BA (Hons) Crimonology'},
      { value: 'digitalArts', label: 'FDA Digital Arts'}
    ]
};

