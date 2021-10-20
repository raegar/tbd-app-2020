import React from 'react';
import {Container} from 'react-bootstrap';
import './adminLogIn.css';
import AdminNavBar from '../../adminComponents/adimnNavBar/adminNavBar'

function AdminLogIn(){
    return(
        <Container>LogIn
            <AdminNavBar/>
        </Container>
    );
}

export default AdminLogIn;