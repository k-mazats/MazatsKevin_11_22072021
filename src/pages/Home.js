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
					<div className="section-title_wrap">
						<h1 className="section-title">
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
			</div>
		);
	}
}

export default Home;
