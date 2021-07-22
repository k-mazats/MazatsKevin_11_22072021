import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import "../styles/Section.css";
import "../styles/Home.css";


class Home extends React.Component {
	render() {
		return (
			<div className="layout">
				<div className="home">
					{this.props.rentals.map((rental) => (
						<Link to={`/rental/${rental.id}`}key={rental.id}><Card
							rental={rental}
							
							
						></Card></Link>
					))}
				</div>
			</div>
		);
	}
}

export default Home;
