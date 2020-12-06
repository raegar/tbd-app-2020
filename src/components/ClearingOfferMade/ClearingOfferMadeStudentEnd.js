import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


const ClearingOfferMadeFifthPage = (props) => {
   function AutoInputData(){
    if(global.ApplicationFormData.email !== "")
    {
      var email = document.getElementById("emailConfirm");
      email.value = global.ApplicationFormData.email;
    }
    if( global.ApplicationFormData.selectedCourse !== "")
    {
        var course = document.getElementById("courseApplied");
        course.value = global.ApplicationFormData.email;
    }
   }
   function DownloadFile()
   {
        var saveData = (function () { 
        var a = document.createElement("a"); 
            document.body.appendChild(a); 
            a.style = "display: none"; 
    return function (fileName) { 
            var json = JSON.stringify(global.ApplicationFormData), 
            blob = new Blob([json], {type: "octet/stream"}), 
            url = window.URL.createObjectURL(blob); 
        a.href = url; 
        a.download = fileName; 
        a.click(); 
        window.URL.revokeObjectURL(url); 
    }; 
    }()); 
    saveData(fileName)
   }
 
var fileName = "studentDetails.json"; 
 
 


return ( <Container>
    <h1>Thank you for using the form</h1>
    <p>Please press confirm to complete</p>
    <h3>Please confirm email that your application will be sent to</h3>
    <TextBox id="emailConfirm" placeholder={global.ApplicationFormData.email}/>
   
<Row>
    <Col><br></br><UCPButton to='/ClearingOfferMadeFourthPage'
                primary="True"
                className="mediumbutton"
                buttonText="Go Back"
                href="/ClearingOfferMadeFourthPage"></UCPButton></Col>

    <Col><br></br>
    <div onClick={DownloadFile}>
        <UCPButton to ='/'
                 primary="True"
                className="mediumbutton"
                buttonText="Confirm"
                href="/"></UCPButton>
    </div>
        </Col>
    </Row>
    {AutoInputData}
 </Container>
)
}
export default ClearingOfferMadeFifthPage;