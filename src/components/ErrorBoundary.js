import React, {Component} from 'react';

class ErrorBoundary extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}

	}

componentDidCatch(error, info) {
	this.setState({hasError: true})
}

render(){
	if (this.state.hasError){
		return <h1>Oops. You made an error</h1> 
	}
	return this.props.children // everything else inside app.js will function properly
}

}

export default ErrorBoundary;