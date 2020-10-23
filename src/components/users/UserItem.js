import React from "react";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url, html_url } }) {
	// const { login, avatar_url, html_url } = props.user;

	return (
		<div className="card text-center">
			<img
				className="round-img"
				style={{ width: "100px" }}
				src={avatar_url}
				alt=""
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					View More
				</a>
			</div>
		</div>
	);
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
