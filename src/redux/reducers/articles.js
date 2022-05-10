import { LOAD_ARTICLES_SUCCESS } from "../actions/aticles";

const initialState = {
	data: [],
	included: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ARTICLES_SUCCESS:
			return { data: action.payload.data, included: action.payload.included }
		default:
			return state;
	}
}

export default reducer;