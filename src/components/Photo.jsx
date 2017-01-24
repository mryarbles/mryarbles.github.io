import * as React from "react";

class Photo extends React.Component {

	constructor(props, context) {
		super(props);
		console.log("Thumb", this.props.url);
	}

	render() {

		return (
				<img src={ this.props.url } />
		);
	}
}


export default Photo;