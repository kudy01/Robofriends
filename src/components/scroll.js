import React from 'react';

const Scroll = (props)=>{
	return (
		<div style={{overflowY: 'scroll', border:'5px solid black', height:'800px'}}>
			{props.children /*all the children of app.js as we are wrapping the scroll */} 
		</div>
		);
}




export default Scroll;