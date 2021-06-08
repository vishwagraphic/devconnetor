import { combineReducers } from "redux";
import alert from "./alerts/reducer";
import register from "./register/reducer";

export default combineReducers({ alert, register });
