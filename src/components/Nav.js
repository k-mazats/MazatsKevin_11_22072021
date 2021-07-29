import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/Nav.css";

class Nav extends React.Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__list-item">
						<NavLink
							exact to="/"
							className="nav__link"
							activeClassName="nav__link--active"
						>
							Accueil
						</NavLink>
					</li>
					<li className="nav__list-item">
						<NavLink
							to="/about"
							className="nav__link"
							activeClassName="nav__link--active"
						>
							A Propos
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
