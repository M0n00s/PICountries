import {
	GET_ALL_DATA,
	GET_DATA_BY_NAME,
	GET_DETAIL_COUNTRY,
	GET_DETAIL_RESET,
} from "../types/types";
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

export const getDetailCountry = (id) => {
	return async (dispatch) => {
		const data = await axios
			.get(`http://127.0.0.1:3001/countries/${id}`)
			.then((data) => data.data);

		dispatch({
			type: GET_DETAIL_COUNTRY,
			payload: data,
		});
	};
};

export const getDetailReset = () => {
	return {
		type: GET_DETAIL_RESET,
		payload: "",
	};
};
