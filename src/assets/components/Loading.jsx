import React from 'react';
import './Loading.css';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img
					src="https://cdn.dribbble.com/users/2280661/screenshots/14914784/media/00e7a447ead65eb68f8c9f3744c26676.jpg?resize=1000x750&vertical=center"
					alt="Loading..."
					className="loading-img"
				/>

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
