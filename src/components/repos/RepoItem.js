import React from "react";
import PropTypes from "prop-types";

export default function RepoItem({ repo }) {
	return (
		<div className="card">
			<h3>
				<a rel="opener" href={repo.html_url}>
					{repo.name}
				</a>
			</h3>
		</div>
	);
}

RepoItem.propTypes = {
	reop: PropTypes.object.isRequired,
};
