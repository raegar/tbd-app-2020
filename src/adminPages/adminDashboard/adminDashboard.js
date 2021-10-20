import React from 'react';
import {Container} from 'react-bootstrap';
import './adminDashboard.css';
import AdminNavBar from '../../adminComponents/adimnNavBar/adminNavBar';

function AdminDashboard(){
    return(
        <Container>Dashboard
            <AdminNavBar/>
        </Container>
    );
}

export default AdminDashboard;