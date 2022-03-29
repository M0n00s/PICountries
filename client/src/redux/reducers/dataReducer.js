import { GET_ALL_DATA } from "./types/types";

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

		default:
			return state;
	}
};
