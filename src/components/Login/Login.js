import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton';
import './Login.css';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};

export default class LoginForm extends React.Component {
    state = initialState;

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
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
        const result = pattern.test(email);
        if(result===true){
          this.setState({
            usernameError:false,
            username:email
          })
          return true;
        } else{
          this.setState({
            usernameError:true
          })
          return false;
        }
      };

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        if(!this.validateEmail(this.state.username))
        {
            usernameError = "invalid username"  
        }
        if(!this.state.password)
        {
            passwordError = "invalid password"   
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
        return(
            <Container className="ContainerStyle">
                <form>
                    <Row>
                        <Col>
                        <div className="UserInfo">
                            <p>Username: </p>
                            <TextBox type="text" value={this.state.username} 
                             onChange={this.handleChangeUsername} placeholder="Enter Username"/> 
                            <span style={{ fontSize: 10, color: "red"}}>{this.state.usernameError}</span>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="UserInfo">
                            <p>Password: </p>
                            <TextBox type="password" value={this.state.password} 
                             onChange={this.handleChangePassword} placeholder="Enter Password"/> 
                             <span style={{ fontSize: 10, color: "red"}}>{this.state.passwordError}</span>
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

   