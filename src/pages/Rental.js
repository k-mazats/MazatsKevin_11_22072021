import React from "react";
import { withRouter} from "react-router-dom";

import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

import Error from "../pages/Error"

import "../styles/Section.css";
import "../styles/Rental.css";

class Rental extends React.Component {
	constructor(props) {
		super(props);
		// N’appelez pas `this.setState()` ici !
		this.state = { rental: this.findRental() };
	}

	findRental = () => {
		const rental = this.props.rentals.find(
			(rental) => rental.id === this.props.match.params.id
		);
		return rental;
	};
	render() {
		return (
			<>
				{this.state.rental ? <main className="layout">
					<div className="rental">
						<Carousel pictures={this.state.rental.pictures}></Carousel>
						<div className="rental__basic-info">
							<div className="rental_title">{this.state.rental.title}</div>
							<div className="rental__location">{this.state.rental.location}</div>
						</div>
						<div className="rental__host-info">
							<div className="rental__host-name">
								<div>{this.state.rental.host.name.split(" ")[0]}</div>
								<div>{this.state.rental.host.name.split(" ")[1]}</div>
							</div>
							<img
								className="rental__host-picture"
								src={this.state.rental.host.picture}
								alt="host"
							></img>
						</div>
				
						<div className="rental__tags">
							{this.state.rental.tags.map((tag, index) => (
								<Tag title={tag} key={`${tag}-${index}`}></Tag>
							))}
						</div>
						<div className="rental__rating">
							{<Rating rating={this.state.rental.rating}></Rating>}
						</div>
						<div className="rental__dropdowns">
							<div className="rental__description">
								<Dropdown
									title="Description"
									content={this.state.rental.description}
								></Dropdown>
							</div>
							<div className="rental__equipments">
								<Dropdown
									title="Equipements"
									content={this.state.rental.equipments}
								></Dropdown>
							</div>
						</div>
					</div>
				</main> : <Error></Error>}
				
			</>
		);
	}
}

export default withRouter(Rental);
