import React from 'react';
import './../App.css';

const Clear = props => {

	return(
		<div className="clear full-width"
		onClick={() => props.handleClick()}
		>
			Clear
		</div>
	);
}

export default Clear; 