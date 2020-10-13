import React, { Component } from 'react'
import Select from 'react-select'
import './DropdownMenu.css'

const options = [
  { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' }
]

const DropdownMenu = () => (
  <Select options={options} />
)

export default DropdownMenu;