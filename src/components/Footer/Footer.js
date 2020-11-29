import React from 'react';
import './Footer.css';
import {isMobile} from 'react-device-detect';


export default class Footers extends React.Component{
    render(){
        const className = isMobile ? "MobileFooter" : "ucpFooter";
        return (
            
            <footer className={className}/>   
        )
    }
};