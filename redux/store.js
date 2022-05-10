import { compose, applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers"
import middleware from "./middleware";
import config from "../config";
const composeEnhancers = (
	config.env === "development"
		&&
		(typeof window !== "undefined") ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: f => f) || compose;

export const configureStore = (services) =>
	createStore(
		rootReducers,
		composeEnhancers(applyMiddleware(...middleware.map(f => f(services))))
	)