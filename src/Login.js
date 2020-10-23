import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import {TextBox} from './TextBox';
import UCPButton from './UCPButton';
import './Login.css';
export default class Login extends React.Component{
    render(){
        return (
            
            <Container>
                <Row> 
                    <Col>
                        <div className="UserInfo">
                            <p style={{paddingRight: "30px"}}>Login: </p>
                            <TextBox/> 
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="UserInfo">
                            <p style={{paddingRight: "3px"}}>Password: </p>
                            <TextBox/> 
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <UCPButton/>
                </Row>
            </Container>
            )
        }
    };