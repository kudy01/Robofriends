import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const App = () => {
	
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
        .then(users => {setRobots(users)});
	}, [])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	
	})
	
	return !robots.length ?  // when the page takes time to load as all the names come from an api
	<h1>Loading</h1>:
	(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots}/>
				</ErrorBoundary>
			</Scroll>
		</div>	
		);
	}
		
	
export default App;