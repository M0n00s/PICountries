import {
	GET_ALL_DATA,
	GET_DATA_BY_NAME,
	GET_DETAIL_COUNTRY,
	GET_DETAIL_RESET,
} from "./types/types";

const initialState = {
	countries: [],
	detail: [],
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DATA:
			return {
				...state,
				countries: action.payload,
			};

		case GET_DATA_BY_NAME:
			return {
				...state,
				countries: action.payload,
			};

		case GET_DETAIL_COUNTRY:
			return {
				...state,
				detail: action.payload,
			};

		case GET_DETAIL_RESET:
			return {
				...state,
				detail: [],
			};

		default:
			return state;
	}
};
