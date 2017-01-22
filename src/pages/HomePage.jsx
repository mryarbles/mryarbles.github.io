import * as React from "react";


class HomePage extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {

	}

	onEnter() {
		console.log("HomePage.onEnter");

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {
		return (
				<div className="container">
					<div className="row">
						<h1>Home</h1>
					</div>
				</div>
		);
	}
}


export default HomePage;