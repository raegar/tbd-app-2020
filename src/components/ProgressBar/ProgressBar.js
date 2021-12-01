import React from "react";

function ProgressBar ({bgcolor, completed, ...props}) {

	const containerStyles ={
		height: 30,
		width: `90%`,
		backgroundColor: `#B2DDDF`,
		borderRadius: 50,
		margin: 50,
	};
	
	const fillerStyles={
		height: `100%`,
		width: `${completed}%`,
		backgroundColor:bgcolor,
		borderRadius: `inherit`,
		textAlign: `right`
	};

	const labelStyles={
		padding:5,
		color: `#ffffff`,
		fontWeight: `bold`
	};

	return(
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}> {`${completed}%`} </span>
			</div>
		</div>
	);
};
export default ProgressBar;