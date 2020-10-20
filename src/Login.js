import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import TextBox from './TextBox';
export default class Login extends React.Component{
    render(){
        return (
            
            <Container>
            <Row> 
                <Col>
               <p>Login: </p>   
               </Col>
               <Col>
                 <TextBox/>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Password: </p>
                </Col>
                <Col>
                  <TextBox/>
                </Col>
            </Row>
            <Row>
                <UCPButton/>
            </Row>
            </Container>
            )
        }
    };