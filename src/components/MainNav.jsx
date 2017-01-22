import * as React from "react";
import Link from 'react-router/Link'

class MainNav extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentWillReact() {
		console.log("MainNav will re-render, since the todo has changed!");
	}


	render() {

		let mainNav;

			mainNav =
					<ul className="ul-plain ul-inline">
						<li className="nav-item dropdown" >
							<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ account.fullName } <span className="caret"></span></a>
							<ul className="dropdown-menu pull-right ul-plain" role="menu">
								<li className="align-middle"><Link to={`/u/${account.uid }`} activeClassName="is-active">Profile</Link></li>
								<li><Link to={ `/u/${ account.uid }/settings` } activeClassName="is-active">Edit Profile</Link></li>
								<li><Link to="/logout">Logout</Link></li>
							</ul>
						</li>
					</ul>;
		
		return (
				<div className="main-nav">
					<nav className="navbar-main navbar fixed-top navbar-full" role="navigation">
						<div className="container-fluid">
							<div className="row align-items-center">
								<div className="col col-xs-8 col-md-2">
									<a  className="logo-container navbar-brand"><img className="logo" src="/img/sportl-logo.svg"/></a>
								</div>
								<div className="col-md-7 hidden-md-down">
									<ul className="ul-plain ul-inline">
										<li><Link to="/" className="btn btn-primary sp-btn" activeClassName="is-active">Find a Team</Link></li>
										<li><Link to="/" className="btn btn-primary sp-btn" activeClassName="is-active">Start a League</Link></li>
									</ul>
								</div>
								<div className="col-xs-4 hidden-md-down">
									{ mainNav }
								</div>
								<div className="col-xs hidden-lg-up">
									<button className="btn hamburger float-xs-right menu-btn">
										<div className="hamburger-bar"></div>
										<div className="hamburger-bar"></div>
										<div className="hamburger-bar"></div>
									</button>
								</div>
							</div>
						</div>
					</nav>
				</div>

		);
	}
}


export default MainNav;
