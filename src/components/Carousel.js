import React from "react";

import "../styles/Carousel.css";

class Carousel extends React.Component {
	state = {
		currentPicture: 0,
		morePictures: false,
	};
	nextPicture = () => {
		this.state.currentPicture === this.props.pictures.length - 1
			? this.setState({ currentPicture: 0 })
			: this.setState({ currentPicture: this.state.currentPicture + 1 });
	};
	previousPicture = () => {
		this.state.currentPicture === 0
			? this.setState({ currentPicture: this.props.pictures.length - 1 })
			: this.setState({ currentPicture: this.state.currentPicture - 1 });
	};
	handleKeyPress = (e, callback) => {
		if (e.charCode === 13) {
			e.preventDefault();
			e.stopPropagation();
			callback();
		}
	};
	isThereMorePicture = () => {
		return this.props.pictures.length > 1;
	};
	componentDidMount() {
		this.setState({ morePictures: this.isThereMorePicture() });
	}
	render() {
		return (
			<div className="carousel">
				{this.state.morePictures ? (
					<div
						className="carousel__controls carousel__controls--previous"
						onClick={this.previousPicture}
						onKeyPress={(event) => {
							this.handleKeyPress(event, this.previousPicture);
						}}
						tabIndex="0"
					>
						<i className="fas fa-chevron-left"></i>
					</div>
				) : null}
				{this.state.morePictures ? (
					<div
						className="carousel__controls carousel__controls--next"
						onClick={this.nextPicture}
						onKeyPress={(event) => {
							this.handleKeyPress(event, this.nextPicture);
						}}
						tabIndex="0"
					>
						<i className="fas fa-chevron-right"></i>
					</div>
				) : null}
				<img
					src={this.props.pictures[this.state.currentPicture]}
					alt="rental"
				></img>
			</div>
		);
	}
}

export default Carousel;
