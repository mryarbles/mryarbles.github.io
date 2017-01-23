import * as React from "react";
import Photo from "../components/Photo";

import copy from "../copy";

const $ = window["jQuery"];

class Page extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {
		console.log("componentDidMount")

	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate", prevProps);
		$("img").unveil();
	}

	render() {

		console.log("Page.render");

		let urls = [];

		for(let i=1; i<=this.props.params.count; i++) {
			urls.push(`/static/img/${ this.props.params.id }/${ i }.png`);
		}

		let copyData = copy[this.props.params.id];

		let list = urls.map((url, key) => {
			//return <img src='static/img/bg.png' key={ key } data-src={ url } />
			return <Photo key={ key } url={ url } />;
		});

		return (
				<div class="page">
					<div className="expanded column row page-info">
						<h1>{ copyData.title }</h1>
						{ copyData.text }
					</div>
					<div className="expanded column row">
						{ list }
					</div>
				</div>
		);
	}
}


export default Page;