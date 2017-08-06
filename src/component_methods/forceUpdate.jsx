import React from 'react';

export default class App extends React.Component {
	constructor() {
		super();
	}

	forceUpdateHandler = () => {
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
				<h4>Random number: <br/>{Math.random()}</h4>
			</div>
		);
	}
}