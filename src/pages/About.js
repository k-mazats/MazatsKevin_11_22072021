import React from "react";

import Dropdown from "../components/Dropdown";

import "../styles/Section.css";
import "../styles/About.css";

class About extends React.Component {
	render() {
		return (
			<div className="layout">
				<div className="about">
					<div className="dropdown-wrapper">
						<Dropdown
							title="Fiabilité"
							content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
						></Dropdown>
					</div>
					<div className="dropdown-wrapper">
						<Dropdown
							title="Respect"
							content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
						></Dropdown>
					</div>
					<div className="dropdown-wrapper">
						<Dropdown
							title="Service"
							content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
						></Dropdown>
					</div>
					<div className="dropdown-wrapper">
						<Dropdown
							title="Sécurité"
							content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
						></Dropdown>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
