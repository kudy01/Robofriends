import React from 'react';
import {robots} from './robots'; //destructuring as we exported multiple files
import Card from './Card';
const CardList = (/*{robots}*/) => {
	// const cardComponent = robots.map((user,index) => {
	// 	return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
	// })
	const cardComponent =[];
	for(let index=0;index<robots.length;index++){
		cardComponent.push(<Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>)
	}
	return (
		<div>
			{cardComponent}
		</div>
	);
}
export default CardList;