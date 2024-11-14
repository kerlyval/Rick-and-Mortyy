import React from 'react';
import './Loading.css';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img
					src="https://www.seekpng.com/png/detail/4-44144_rick-and-morty-portal-png.png"
					alt="Loading..."
					className="loading-img"
				/>

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
