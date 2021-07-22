import React from "react";
import rentals from "../datas/logements.json";
import Card from "../components/Card";

import "../styles/Section.css";
import "../styles/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="layout">
				<div className="home">
					{rentals.map((rental) => (
						<Card
							rental={rental}
							key={rental.id}
							
						></Card>
					))}
				</div>
			</div>
		);
	}
}

export default Home;
