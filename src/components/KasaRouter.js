import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Rental from "../pages/Rental";
import About from "../pages/About";
import Error from "../pages/Error";

class KasaRouter extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<Home rentals={this.props.rentals} />
				</Route>
				<Route exact path="/rental/:id">
					<Rental rentals={this.props.rentals} />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		);
	}
}

export default KasaRouter;
