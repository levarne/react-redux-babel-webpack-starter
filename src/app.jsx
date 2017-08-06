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
<<<<<<< HEAD
				<h1>{this.props.footer}</h1>
=======
				<h1>Header</h1>
				<h2>Content</h2>
				<p>This is the content!!!</p>
>>>>>>> c0c13fa0d5f928e7d0072dab8216267d6c70c8e5
			</div>
		);
	}
}

export default App;