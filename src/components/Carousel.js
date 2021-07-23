import React from "react";

import "../styles/Carousel.css";

class Carousel extends React.Component {
	state = {
		currentPicture: 0,
	};
	nextPicture = () =>{
    this.state.currentPicture === this.props.pictures.length - 1 ?
    this.setState({ currentPicture: 0 })
    :
    this.setState({currentPicture: this.state.currentPicture + 1})
  }
	previousPicture = () =>{
    this.state.currentPicture === 0
			? this.setState({ currentPicture: this.props.pictures.length - 1 })
			: this.setState({ currentPicture: this.state.currentPicture - 1 });
  }
	render() {
		return (
			<div className="carousel">
				<div
					className="carousel__controls carousel__controls--previous"
					onClick={this.previousPicture}
				>
					<i className="fas fa-chevron-left"></i>
				</div>
				<div
					className="carousel__controls carousel__controls--next"
					onClick={this.nextPicture}
				>
					<i className="fas fa-chevron-right"></i>
				</div>
				<img
					src={this.props.pictures[this.state.currentPicture]}
					alt="rental"
				></img>
			</div>
		);
	}
}

export default Carousel;