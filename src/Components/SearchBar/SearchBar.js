import React, {Component} from 'react';

export default class SearchBar extends Component {
	state = {
		term: ""
	};

	onInputChange = event => {
		this.setState({term: event.target.value});
	};

	onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
	};

	render() {
		return (
			<div className="ui segment search-bar">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

// onChange, create the function to assign to onChange, set state on the function, set it to the value, add form submit
