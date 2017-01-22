import * as React from "react";
import { Link } from 'react-router'

class Menu extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}


	render() {


		return (
				<div class="menu-wrapper">
					<div className="row column">
						<ul className="simple">
							<li>
								<Link to="/page/intranet/5">
									<img className="thumbnail" src="static/img/intranet/tn.png" />
								</Link>
							</li>
							<li>
								<Link to="/page/nogpong/2">
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
						</ul>
					</div>
				</div>
		);
	}
}


export default Menu;
