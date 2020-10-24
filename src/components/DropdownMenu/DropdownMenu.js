import React, { Component } from 'react'
import Select from 'react-select'
import './DropdownMenu.css'

const options = [
  { value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
  { value: 'criminoloy', label: 'BA (Hons) Crimonology'},
  { value: 'digitalArts', label: 'FDA Digital Arts'}
]

const DropdownMenu = () => (
  <Select data-testid="ucpDropdownMenu" options={options} />
)

export default DropdownMenu;