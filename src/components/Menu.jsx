import * as React from "react";
import { Link } from 'react-router'

class Menu extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}

	onLink() {

	}

	render() {


		return (
				<div className="menu-wrapper">

					<div className="row column">
						<ul className="simple">
							<li>
								<Link to="/page/assetavenue/11"  data-toggle="mainMenu">
									<img className="thumbnail" src="static/img/assetavenue/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/intranet/5">
									<img className="thumbnail" src="static/img/intranet/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/amanda/4">
									<img className="thumbnail" src="static/img/amanda/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/nogpong/nogpong/9">
									<img className="thumbnail" src="static/img/nogpong/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/ssla2/7">
									<img className="thumbnail" src="static/img/ssla2/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/ssla1/7">
									<img className="thumbnail" src="static/img/ssla1/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/ringblender/3">
									<img className="thumbnail" src="static/img/ringblender/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/sxsw/1">
									<img className="thumbnail" src="static/img/sxsw/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/searchauto/7">
									<img className="thumbnail" src="static/img/searchauto/tn.png" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
		);
	}
}


export default Menu;
