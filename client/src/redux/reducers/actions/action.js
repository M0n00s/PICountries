import { GET_ALL_DATA } from "../types/types";
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
