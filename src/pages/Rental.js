import React from "react";

import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";

import "../styles/Section.css";
import "../styles/Rental.css";

class Rental extends React.Component {
	render() {
		return (
			<div className="layout">
				<div className="rental">
					<div className="carousel">
						<img src={this.props.rental.cover} alt="rental"></img>
					</div>
					<div className="rental__basic-info">
						<div className="rental_title">{this.props.rental.title}</div>
						<div className="rental__location">{this.props.rental.location}</div>
					</div>
					<div className="rental__host-info">
						<div className="rental__host-name">
							<div>{this.props.rental.host.name.split(" ")[0]}</div>
							<div>{this.props.rental.host.name.split(" ")[1]}</div>
						</div>
						<img
							className="rental__host-picture"
							src={this.props.rental.host.picture}
							alt="host"
						></img>
					</div>

					<div className="rental__details">
						<div className="rental__tags">{this.props.rental.tags.map( (tag,index) => (<Tag title={tag} key={`${tag}-${index}`}></Tag>))}</div>
						<div className="rental__rating">{this.props.rental.rating}</div>
						<div className="rental__description">
							<Dropdown
								title="Description"
								content={this.props.rental.description}
							></Dropdown>
						</div>
						<div className="rental__equipments">
							<Dropdown
								title="Equipements"
								content={this.props.rental.equipments}
							></Dropdown>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Rental;
