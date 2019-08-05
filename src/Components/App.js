import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../Apis/youtube';

class App extends React.Component {

	state = {
		videos: []

	};

	onTermSubmit = async term => {
		const KEY = 'AIzaSyCPfANBxNPdbxKZ1ivzLdxUqm3BxsCHZMM';
		 const response = await youtube.get(`/search?key=${KEY}`, {
			params: {
				q: term,
				part:"snippet",
				maxResults:5,
			}
		});

		this.setState({videos: response.data.items})
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				I have {this.state.videos.length} videos.
			</div>
		);
	}
}

export default App;
