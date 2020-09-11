import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
        .then(users => this.setState({ robots: users}));
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render(){
		const {robots, searchfield} = this.state; // destructuring
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		
		})
		return !robots.length ?  // when the page takes time to load as all the names come from an api
		<h1>Loading</h1>:
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>	
			);
		}
		
	}
export default App;