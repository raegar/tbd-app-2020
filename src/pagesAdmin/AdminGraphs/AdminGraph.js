import React from 'react';
import {Container} from 'react-bootstrap';
import './AdminGraph.css';
import AdminNavBar from '../../componentsAdmin/AdminNavBar/AdminNavBar';
import GraphTabs from '../../componentsAdmin/TabbedNavbar/Renderer'

function AdminGraph(){
	return(
		<Container>
			<AdminNavBar/>
			<GraphTabs/>
		</Container>
	);
}

export default AdminGraph;