import React from "react";
import "./SearchBar.css"
const SearchBar = () => {
	return (
		<form action="/" method="get">
			<label htmlFor="header-search">
				<span className="visually-hidden">Search blog posts </span>
			</label>
			<input
				type="text"
				id="header-search"
				placeholder="Search blog posts"
				name="s"
			/>
			<button type ="submit">search</button>
		</form>
	)
}
const posts= [ 
	{id:'1', name: 'this first post is about react'},
	{id:'2', name: 'this is about preact'},
	{id:'3', name: 'this is the last post'},
];
export default SearchBar;