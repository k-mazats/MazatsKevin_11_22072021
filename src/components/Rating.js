import React from "react";

import "../styles/Rating.css";

class Rating extends React.Component {
	getRating = (rating) => {
		let ratingArray = [];
		for (let i = 0; i < rating; i++) {
			ratingArray.push(true);
		}
		for (let i = rating; i < 5; i++) {
			ratingArray.push(false);
		}
		return ratingArray;
	};
	render() {
		return (
			<div className="rating">
				{this.getRating(this.props.rating).map((rating, index) =>
					rating ? (
						<i
							className="fas fa-star rating__star"
							key={`rating-${index}`}
						></i>
					) : (
						<i
							className="fas fa-star rating__star--blank"
							key={`rating-${index}`}
						></i>
					)
				)}
			</div>
		);
	}
}
export default Rating;
