import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton';
import './Login.css';
import {isMobile} from 'react-device-detect';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
    
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
            console.log(this.state);
            this.setState(initialState);
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
        return true;
    };
    ClearForm = () => {
     this.setState(initialState);
    };
    render() {
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
                            <span>Username: </span>
                            <TextBox
                             type="text" value={this.state.username} 
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
                            <span>Password: </span>
                            <TextBox type="password" value={this.state.password} 
                             onChange={this.handleChangePassword} placeholder="Enter Your Password"/> 
                        </div>
                        <div className="InvalidInput">
                           <span>{this.state.passwordError}</span>
                        </div>
                        </Col>
                    </Row>
                    <div className="UserInfo">
                        <UCPButton className="smallbutton" buttonText="Submit"
                            type="submit"
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </Container>
            );
        }
    }

   