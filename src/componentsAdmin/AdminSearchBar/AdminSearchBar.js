import React from "react";
import "./AdminSearchBar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function SearchBar(){
	return (
		<div>
			<label htmlFor="header-search">
				<span className="visually-hidden">Search blog posts </span>
			</label>
			<input
				type="text"
				id="header-search"
				placeholder="Search data"
				name="s"
			/>
			<button className= "searchbar-container">
                Search
            </button>
		</div>
	);
}

const posts= [ 
	{id:'1', name: 'this first post is about react'},
	{id:'2', name: 'this is about preact'},
	{id:'3', name: 'this is the last post'},
];
export default SearchBar;