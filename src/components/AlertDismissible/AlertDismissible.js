import {Alert , Button} from 'react-bootstrap';
import React,{useState} from 'react';
import   './AlertDismissible.css';
function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert className="Alert" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Please request GCSE grades</Alert.Heading>
        </Alert>
      );
    }
    return show? <Button onClick={() => setShow(true)}>Show Alert</Button>: <span></span>;
  }

  export default AlertDismissible;