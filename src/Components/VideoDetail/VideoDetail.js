import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
	return (
		<div className="item video-item">
			<img
				className="ui image video-image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
