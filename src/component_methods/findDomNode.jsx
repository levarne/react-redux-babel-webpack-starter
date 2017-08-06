// @flow

import React from 'react';
import ReactDom from 'react-dom';

export default class App extends React.Component {
	constructor () {
		super();

		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	}

	findDomNodeHandler = () => {
		let myDiv = document.getElementById('myDiv');
		let node = ReactDom.findDOMNode(myDiv);

		if (node) {
			node.style.color = 'green';
			node.innerText = 'Levarne';
		}
	}

	render () {
		return (
			<div>
				<button onClick={this.findDomNodeHandler}>FIND DOM NODE</button>
				<div id = "myDiv">NODE</div>
			</div>
		);
	}
}