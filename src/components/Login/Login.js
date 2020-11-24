import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton';
import './Login.css';
import {isMobile} from 'react-device-detect';
import {  Redirect } from 'react-router';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    location: ""
    
};

export default class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = initialState;
   }
    handleChangeUsername = event => {
        this.setState({username: event.target.value });
    };
    handleChangePassword = event => {
        this.setState({password: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.setState(initialState);
            this.setState({redirect: true});
        }
    };
    validateEmail(email){
        const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/;
        const result = pattern.test(email);
        if(result===true){
          this.setState({
            usernameError:false,
            username:email,
          })
          return true;
        } else{
          this.setState({
            usernameError:true,
            
          })
          return false;
        }
      };

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        if(!this.validateEmail(this.state.username))
        {
            usernameError = "Invalid username!"
            
        }
        if(!this.state.password)
        {
            passwordError = "Invalid password!"   
        }
        if(usernameError || passwordError)
        {
            this.setState({usernameError, passwordError});
            return false;
        }
        if(this.state.password === "Password")
        {
            global.staffFirstName = this.state.username.substring(0, this.state.username.indexOf('.'));
            global.staffLastName = this.state.username.substring(this.state.username.indexOf('.')+1, this.state.username.indexOf('@'));
            global.userType = "staff";
            return true;
        }

        return false;
    };
    ClearForm = () => {
     this.setState(initialState);
    };
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/NewApplicationPage" />;
        }

        const className = isMobile ? "MobileContainerStyle" : "ContainerStyle";
        return(
            <Container className={className}>
                <form>
                <Row>
                    <Col>
                    <div className="UserInfo">
                        <h2>Login</h2>
                    </div>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                        <div className="UserInfo">
                            <TextBox
                             type="text" title="Username" value={this.state.username} 
                             onChange={this.handleChangeUsername}  placeholder="Enter Your Username"/> 
                        </div>
                        <div className="InvalidInput">
                           <span>{this.state.usernameError}</span>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="UserInfo">
                            <TextBox title="Password" type="password" value={this.state.password} 
                             onChange={this.handleChangePassword} placeholder="Enter Your Password"/> 
                        </div>
                        <div className="InvalidInput">
                           <span>{this.state.passwordError}</span>
                        </div>
                        </Col>
                    </Row>
                    <div className="UserInfo">
                        <UCPButton onClick={this.handleSubmit} to="none" className="smallbutton" buttonText="Submit"
                        />                   
                    </div>
                </form>
            </Container>
            );
        }
    }
