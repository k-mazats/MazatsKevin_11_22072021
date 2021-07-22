import React from "react";

import Dropdown from "../components/Dropdown";

import "../styles/Section.css";
// import "../styles/Rental.css";

class Rental extends React.Component {
	render() {
		return (
			<div className="layout">
				<div className="rental">
					<div className="carousel">
						<img src={this.props.rental.cover} alt="rental"></img>
					</div>
					<div className="rental__basic-info">
						<div>{this.props.rental.title}</div>
						<div>{this.props.rental.location}</div>
					</div>
					<div className="rental__host-info">
						<div>{this.props.rental.host.name}</div>
						<img src={this.props.rental.host.picture} alt="host"></img>
						
					</div>
          
					<div className="rental__details">
            <div>{this.props.rental.tags}</div>
            <div>{this.props.rental.rating}</div>
						<Dropdown
							title="Description"
							content={this.props.rental.description}
						></Dropdown>
						<Dropdown
							title="Equipements"
							content={this.props.rental.equipments}
						></Dropdown>
					</div>
				</div>
			</div>
		);
	}
}

export default Rental;
