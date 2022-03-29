import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import "../../css/navbar.css";

export const NavBar = () => {
	return (
		<div className="navbar__container">
			<hr />
			<h2>Menu</h2>
			<NavLink to="/client/dashboard">
				<p>
					<BsFillHouseFill /> DashBoard
				</p>
			</NavLink>
			<NavLink to="/client/create">
				<p>
					<BsFillBookmarkPlusFill /> Create Activity
				</p>
			</NavLink>
		</div>
	);
};
