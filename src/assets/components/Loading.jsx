import React from 'react';
import './Loading.css';
import portalImage from '../assets/images/portal-a.png';

const Loading = () => {
	return (
		<div className="loader">
			<div className="svg-wrapper">
				<img src={portalImage} alt="Loading..." className="loading-img" />

				{/* <div className="loading-text">Welcome to this Galaxy </div> */}
			</div>
		</div>
	);
};

export default Loading;
