import React from 'react';
import VideoDetail from '../VideoDetail/VideoDetail';

const VideoList = ({videos}) => {
	const renderedList = videos.map(video => {
		return <VideoDetail video={video} />;
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
