import React from "react";

import "../styles/Dropdown.css";

class Dropdown extends React.Component {
	state = {
		visible: false,
	};
	toggleDropdown = () => {
		this.setState({ visible: !this.state.visible });
	};
	fillContent = (content) => {
		if (Array.isArray(content)) {
			return (
				<ul>
					{content.map((equipment, index) => (
						<li key={`equipment${index}`}>{equipment}</li>
					))}
				</ul>
			);
		} else {
			return <p>{content}</p>;
		}
	};
	handleKeyPress = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			e.stopPropagation();
			this.toggleDropdown()
		}
	}
	render() {
		return (
			<div className="dropdown">
				<div
					className="dropdown__toggle"
					onClick={this.toggleDropdown}
					onKeyPress={this.handleKeyPress}
					tabIndex="0"
					role="button"
					aria-pressed={this.state.visible}
					aria-expanded={this.state.visible}
				>
					<div className="dropdown__toggle-title">{this.props.title}</div>
					<div className="dropdown__toggle-icon">
						{this.state.visible ? (
							<i className="fas fa-chevron-up"></i>
						) : (
							<i className="fas fa-chevron-down"></i>
						)}
					</div>
				</div>
				{this.state.visible ? (
					<div className="dropdown__content">
						{this.fillContent(this.props.content)}
					</div>
				) : null}
			</div>
		);
	}
}

export default Dropdown;
