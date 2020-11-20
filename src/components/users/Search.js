import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, settext] = useState("");

	const onChange = (e) => {
		settext(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === "") {
			setAlert("Please enter some search value", "light");
		} else {
			githubContext.searchUsers(text);
			settext("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={onChange}
				/>

				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default Search;
