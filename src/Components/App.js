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

	componentDidMount() {
		this.onTermSubmit('funk');
	}
	onTermSubmit = async term => {
		const KEY = 'AIzaSyCPfANBxNPdbxKZ1ivzLdxUqm3BxsCHZMM';
		const response = await youtube.get(`/search?key=${KEY}`, {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({selectedVideo: video});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						{/* I have {this.state.videos.length} videos. */}
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
