import React from 'react';
import CardList from './CardList';
import {robots} from './robots'; //destructuring as we exported multiple files

const App =() => {
	return (
			<CardList robots={robots}/>
		);
	
}

export default App;