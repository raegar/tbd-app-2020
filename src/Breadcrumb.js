import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
//import { Breadcrumb } from 'react-bootstrap';


export default class BreadcrumbComp extends React.Component{
 render(){
     return (
        <Breadcrumb>
        <Breadcrumb.Item href="#">Personal Information</Breadcrumb.Item>
        <Breadcrumb.Item href="a">Qualifications</Breadcrumb.Item>
        <Breadcrumb.Item active>About you</Breadcrumb.Item>
        </Breadcrumb>
     )
 }
};