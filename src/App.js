import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		const name = "Anushka Wiijegoonawardan";
		const loading = false;
		const showName = true;

		// if (loading) {
		// 	return <h4>Page Loading...</h4>;
		// }

		return (
			<div className="App">
				{loading ? (
					<h4>Page Loading...</h4>
				) : (
					<h1>
						Hello {showName && name.toUpperCase()} i am {20 + 4} years old
					</h1>
				)}
			</div>
		);
	}
}

export default App;
