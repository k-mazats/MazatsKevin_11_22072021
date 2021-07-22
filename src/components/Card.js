import React from "react";

import "../styles/Card.css";

class Card extends React.Component {
	render() {
		return (
			<div
				className="card"
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),
url(
									${this.props.rental.cover}
									)`,
				}}
			>
				<div className="card__title">{this.props.rental.title}</div>
			</div>
		);
	}
}

export default Card;
