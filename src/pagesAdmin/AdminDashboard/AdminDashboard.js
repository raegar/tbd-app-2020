import React from 'react';
import {Container} from 'react-bootstrap';
import './AdminDashboard.css';
import AdminNavBar from '../../componentsAdmin/AdminNavBar/AdminNavBar';


function AdminDashboard(){
	return(
		<Container>Dashboard
			<AdminNavBar/>
		</Container>
	);
}

export default AdminDashboard;