import {
	FILTER_BY_CONTINENT,
	GET_ALL_DATA,
	GET_DATA_BY_NAME,
	GET_DETAIL_COUNTRY,
	GET_DETAIL_RESET,
	ORDER_BY_NAME,
	ORDER_BY_POPULATION,
} from "../types/types";
import axios from "axios";

// get data
export const getDataPrincipal = () => {
	return async (dispatch) => {
		const data = await axios
			.get(`http://127.0.0.1:3001/countries`)
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

// ORDERS
export const orderByName = (order) => {
	return {
		type: ORDER_BY_NAME,
		payload: order,
	};
};
export const OrderByPopulation = (order) => {
	return {
		type: ORDER_BY_POPULATION,
		payload: order,
	};
};
//FILTERS
export const filterByContinent = (continent) => {
	return {
		type: FILTER_BY_CONTINENT,
		payload: continent,
	};
};

//--- ruta post
// export const post =(name, season)=>{
// 	return async (dispath) => {
// 		const data = await axios.post('http//:127.0.0.1:3001/activities',{
// 			name, season
// 		})
// 		return data
// 	}
// }

//-----Ordenamiento podemos cambiar name por vrible
// Countries.findAll({
// 	order : {
// 		['name', ASC || DSC]
// 	}
// })
