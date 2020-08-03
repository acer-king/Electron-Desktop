import { combineReducers } from "redux";
import alerts from "./reducers/alerts";
import auth from "./reducers/auth";

const app = combineReducers({alerts, auth});
export default app
