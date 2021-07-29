import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

class Error extends React.Component {
	render() {
		return (
			<main className="layout">
				<div className="error">
					<h1 className="error__title">404</h1>
					<p className="error__message">
						Oups! La page que vous demandez n'existe pas.
					</p>
					<Link to="/" className="error__link">
						Retourner sur la page d’accueil
					</Link>
				</div>
			</main>
		);
	}
}

export default Error;
