import React from 'react';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: []
		};
	}

	setStateHandler = () => {
		var item = 'setState...';
		var myArray = this.state.data;
		myArray.push(item);
		this.setState({data: myArray});
	}

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>SET STATE</button>
				<h4>State Array :: {this.state.data}</h4>
			</div>
		);
	}
}