import * as React from "react";
import Photo from "../components/Photo";

const $ = window["jQuery"];

class Page extends React.Component {

	constructor(props, context) {
		super(props);
		this.state = {
			count: props.params.count,
			folder: props.params.id
		}
	}

	componentDidMount() {
		$("img").unveil();
	}

	render() {

		let urls = [];

		for(let i=1; i<=this.state.count; i++) {
			urls.push(`/static/img/${ this.state.folder }/${ i }.png`);
		}

		let list = urls.map((url, key) => {
			//return <img src='static/img/bg.png' key={ key } data-src={ url } />
			return <Photo key={ key } url={ url } />;
		});

		return (
				<div className="column row">
					{ list }
				</div>
		);
	}
}


export default Page;