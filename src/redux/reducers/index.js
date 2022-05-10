import { combineReducers } from "redux";
import ui from "./ui"
import articles from "./articles"
export default combineReducers({
	ui,
	articles,
})
