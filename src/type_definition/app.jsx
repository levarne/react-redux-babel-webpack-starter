import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h3>Array: {this.props.propArray}</h3>
				<h3>Bool: {this.props.propBool ? 'True...' : 'False...'}</h3>
				<h3>Func: {this.props.propFunc(3)}</h3>
				<h3>Number: {this.props.propNumber}</h3>
				<h3>String: {this.props.propString}</h3>
				<h3>Object: {this.props.propObject.objectName1}</h3>
				<h3>Object: {this.props.propObject.objectName2}</h3>
				<h3>Object: {this.props.propObject.objectName3}</h3>
			</div>
		);
	}
}
// console.log('App', App);
App.propTypes = {
	propArray: PropTypes.array.isRequired,
	propBool: PropTypes.bool.isRequired,
	propFunc: PropTypes.func,
	propNumber: PropTypes.number,
	propString: PropTypes.string,
	propObject: PropTypes.object
};

App.defaultProps = {
	propArray: [1, 2, 3, 4],
	propBool: true,
	propFunc: (e) => {return e},
	propNumber: 28,
	propString: 'Levarne Sobotker',
	propObject: {
		objectName1: 'objectName1',
		objectName2: 'objectName2',
		objectName3: 'objectName3'
	}
}