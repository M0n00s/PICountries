import { GET_ALL_DATA, GET_DATA_BY_NAME } from "./types/types";

const initialState = {
	countries: [],
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

		default:
			return state;
	}
};
