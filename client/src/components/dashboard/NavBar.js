import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
	return (
		<div>
			<h2>Menu</h2>
			<NavLink to="/client/dashboard">
				<p>DashBoard</p>
			</NavLink>
			<NavLink to="/client/create">
				<p>Create Activity</p>
			</NavLink>
		</div>
	);
};
