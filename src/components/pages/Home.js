import React, { Fragment } from "react";
import Alert from "../layout/Alert";
import Search from "../users/Search";
import Users from "../users/Users";

const Home = () => {
	return (
		<Fragment>
			<Alert />
			<Search />
			<Users />
		</Fragment>
	);
};

export default Home;
