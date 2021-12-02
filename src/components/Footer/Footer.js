import React from 'react';
import './Footer.css';
import {isMobile} from 'react-device-detect';
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Modal from "../Modal/Modal";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {Time, Days} from '../../global/Constants';

function Footer() {
	const className = isMobile ? "MobileFooter" : "ucpFooter";

					
	return (	
			<footer className={className}/>
	);
	
};

export default Footer;