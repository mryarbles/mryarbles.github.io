import * as React from "react";

const $ = window["jQuery"];

class RingblenderPage extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {
		console.log("Ringblender didMount");
		$("img").unveil();
	}

	onEnter() {
		console.log("Ringblender onEnter");

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {
		return (
				<div className="column row">
					<img src="static/img/bg.png" data-src="static/img/ringblender/1.png" />
					<img src="static/img/bg.png" data-src="static/img/ringblender/2.png" />
					<img src="static/img/bg.png" data-src="static/img/ringblender/3.png" />
				</div>
		);
	}
}


export default RingblenderPage;