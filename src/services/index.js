import consoleLogger from "./logger/console";
import elasticSearch from "./logger/elasticSearch"
import api from "./api"
import config from "../../config";

const services = {
	log: config.env === "development" ? consoleLogger : elasticSearch,
	api
}

export default services;