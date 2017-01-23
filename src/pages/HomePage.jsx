import * as React from "react";
import { Link } from 'react-router'


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
				<div className="page-wrapper">
					<div className="row align-spaced">

						<Link to="/page/assetavenue/11">
							<img className="thumbnail" src="static/img/assetavenue/tn-lg.png" />
						</Link>

						<Link to="/page/intranet/5">
							<img className="thumbnail" src="static/img/intranet/tn-lg.png" />
						</Link>

						<Link to="/page/amanda/4">
							<img className="thumbnail" src="static/img/amanda/tn-lg.png" />
						</Link>

					</div>
					<div className="row align-spaced">
						<Link to="/nogpong/nogpong/2">
							<img className="thumbnail" src="static/img/nogpong/tn-lg.png" />
						</Link>

						<Link to="/page/ssla2/7">
							<img className="thumbnail" src="static/img/ssla2/tn-lg.png" />
						</Link>

						<Link to="/page/ssla1/7">
							<img className="thumbnail" src="static/img/ssla1/tn-lg.png" />
						</Link>

					</div>
					<div className="row align-spaced">
						<Link to="/page/ringblender/3">
							<img className="thumbnail" src="static/img/ringblender/tn-lg.png" />
						</Link>

						<Link to="/page/sxsw/1">
							<img className="thumbnail" src="static/img/sxsw/tn-lg.png" />
						</Link>

						<Link to="/page/searchauto/7">
							<img className="thumbnail" src="static/img/searchauto/tn-lg.png" />
						</Link>
					</div>
				</div>
		);
	}
}


export default HomePage;