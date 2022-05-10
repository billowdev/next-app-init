import { saveLocalStorage } from "../../helpers/useLocalStorage";
import { PAGE_LOADED } from "../actions/ui"

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
	next(action);
	if (action.type === PAGE_LOADED) {
		log("page loaded")
		saveLocalStorage('action', 'page loaded')
	}
}

export default [pageLoadedFlow]