import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton';
import './Login.css';

export default class Login extends React.Component{
    render(){
        return (     
            <Container className="ContainerStyle">
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
                    <div className="UserInfo">
                        <UCPButton className="mediumbutton" buttonText="Login"/>
                    </div>
                </Row>
            </Container>
            )
        }
    };