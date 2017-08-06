import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			header: 'Header from propsie',
			content: 'Content from propsie',
			footer: 'Footer from propsie',
		};
	}

	render() {
		return (
			<div>
				<Header header={this.state.header}/>
				<Content content={this.state.content}/>
				<Footer footer={this.state.footer}/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		const styleH = {
			marginBottom: '0px'
		};

		const styleP = {
			marginTop: '0px'
		};

		return (
			<div>
				<h2 style={styleH}>{this.props.content}</h2>
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.footer}</h1>
			</div>
		);
	}
}

export default App;