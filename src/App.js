import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		fetch('https://api.github.com/users/manloeng').then((res) => res.json()).then((data) => this.setState({ data }));
	}

	render() {
		const { data } = this.state;
		return (
			data && (
				<div className="App">
					{console.log(data)}
					<header className="App-header">
						<h1>{data.name}: Git Hub Data</h1>
					</header>
					<section>
						<figure>
							<img src={data.avatar_url} alt="Andrew Chung" />
							<figcaption>created at : {new Date(data.created_at).toISOString().split('T')[0]}</figcaption>
						</figure>
					</section>
					<p>follwers : {data.followers}</p>
					<p>
						My Repos: <a href={`${data.repos_url}`}>Click Here for my repo data</a>
					</p>
				</div>
			)
		);
	}
}

export default App;
