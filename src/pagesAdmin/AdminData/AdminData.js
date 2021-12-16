import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './AdminData.css';
import AdminNavBar from '../../componentsAdmin/AdminNavBar/AdminNavBar';
import SearchBar from '../../componentsAdmin/AdminSearchBar/AdminSearchBar';

function AdminData(){
	return(
		<Container>
			<Row>
				<div class="col-sm-2">
					<AdminNavBar/>
				</div>
				<div class="col-lg-6">
					<SearchBar/>
				</div>
			</Row>
		</Container>
	);
}

export default AdminData;