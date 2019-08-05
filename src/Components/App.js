import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../Apis/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	onTermSubmit = async term => {
		const KEY = 'AIzaSyCPfANBxNPdbxKZ1ivzLdxUqm3BxsCHZMM';
		const response = await youtube.get(`/search?key=${KEY}`, {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5
			}
		});

		this.setState({videos: response.data.items});
	};

	onVideoSelect = video => {
		this.setState({selectedVideo: video});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{/* I have {this.state.videos.length} videos. */}
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
}

export default App;
