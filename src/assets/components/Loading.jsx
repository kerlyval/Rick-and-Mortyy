import React from 'react';
import './Loading.css';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BvgAIRC6eQ0mCK7OLx7GthpUOeQc3Lq7pQ&s"
					alt="Loading..."
					className="loading-img"
				/>

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
