import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import "../styles/Section.css";
import "../styles/Home.css";


class Home extends React.Component {
	render() {
		return (
			<main className="layout">
				<div className="home">
					<div className="home-title__wrap">
						<h1 className="home-title">
							Chez vous, partout et ailleurs
						</h1>
					</div>
					<div className="rentals-grid">
						{this.props.rentals.map((rental) => (
							<Link to={`/rental/${rental.id}`} key={rental.id}>
								<Card rental={rental}></Card>
							</Link>
						))}
					</div>
				</div>
			</main>
		);
	}
}

export default Home;
