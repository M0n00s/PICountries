import React from "react";
import { Switch, Route } from "react-router-dom";

import { CreateActivity } from "../components/createAct/CreateActivity";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { DetailCountry } from "../components/detail/DetailCountry";

import "../css/dashboard.css";
import { NavBar } from "../components/dashboard/NavBar";

export const DashboardRouter = () => {
	return (
		<div className="dashboard__container">
			<aside className="dashboard__aside">
				<div className="dashboard__title">
					<h2>
						<span>COUNTRIES</span>APP
					</h2>
					<p>Created by Abdel Arocha</p>
				</div>
				<NavBar />
			</aside>
			<main className="dashboard__main">
				<Switch>
					<Route
						path="/client/dashboard"
						component={DashboardScreen}
					/>
					<Route path="/client/create" component={CreateActivity} />
					<Route
						path="/client/detail/:id"
						component={DetailCountry}
					/>
				</Switch>
			</main>
		</div>
	);
};
