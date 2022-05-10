import { compose, applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers"
import middleware from "./middleware";
import config from "../../config";
import services from "../services"
import { createWrapper } from "next-redux-wrapper";


const composeEnhancers = (
	config.env === "development"
		&&
		(typeof window !== "undefined") ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: f => f) || compose;

const initialStore = () => {
	return createStore(rootReducers, composeEnhancers(
		applyMiddleware(...middleware.map(f => f(services)))))
}

export const wrapper = createWrapper(initialStore)

