import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store";
import { AppRouter } from "./router/AppRouter";

import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://127.0.0.1:3001";

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</Provider>
	);
};
