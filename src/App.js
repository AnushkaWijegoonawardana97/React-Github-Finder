import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
	const [repos, setrepos] = useState([]);
	const [loading, setloading] = useState(false);
	const [alert, setalert] = useState(null);

	// Get Users Repos
	const getUserRepos = async (username) => {
		setloading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setrepos(res.data);
		setloading(false);
	};

	// Set Alert
	const setAlert = (msg, type) => {
		setalert({
			msg,
			type,
		});

		setTimeout(() => setalert(null), 2500);
	};

	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />

					<div className="container">
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Fragment>
										<Alert alert={alert} />
										<Search setAlert={setAlert} />
										<Users />
									</Fragment>
								)}
							/>

							<Route exact path="/about" component={About} />

							<Route
								exact
								path="/user/:login"
								render={(props) => (
									<User {...props} getUserRepos={getUserRepos} repos={repos} />
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
