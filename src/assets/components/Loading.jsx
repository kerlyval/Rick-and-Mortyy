import React from 'react';
import './Loading.css';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img
					src="https://preview.redd.it/lwwt86ci5anz.jpg?width=1080&crop=smart&auto=webp&s=0992e7b263674b295f8d260e0fb4d1852dbf6985"
					alt="Loading..."
					className="loading-img"
				/>

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
