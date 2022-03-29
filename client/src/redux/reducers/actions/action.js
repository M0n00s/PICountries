import { GET_ALL_DATA, GET_DATA_BY_NAME } from "../types/types";
import axios from "axios";

export const getDataPrincipal = () => {
	return async (dispatch) => {
		const data = await axios
			.get("http://127.0.0.1:3001/countries")
			.then((data) => data.data);

		dispatch({
			type: GET_ALL_DATA,
			payload: data,
		});
	};
};

export const getCountryByName = (name) => {
	return async (dispatch) => {
		const data = await axios
			.get(`http://127.0.0.1:3001/countries?name=${name}`)
			.then((data) => data.data);

		dispatch({
			type: GET_DATA_BY_NAME,
			payload: data,
		});
	};
};
