import React from 'react';
import {Container} from 'react-bootstrap';
import './AdminDashboard.css';
import AdminNavBar from '../../adminComponents/AdminNavBar/AdminNavBar';

function AdminDashboard(){
	return(
		<Container>Dashboard
			<AdminNavBar/>
		</Container>
	);
}

export default AdminDashboard;