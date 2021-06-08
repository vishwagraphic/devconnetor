import { registerActionTypes } from "./actionTypes";
import axios from "axios";

export const register = (name, email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const options = JSON.stringify({ name, email, password });
  dispatch({ type: registerActionTypes.REGISTER_REQUEST });
  try {
    const res = await axios.post("/api/users", options, config);
    dispatch({ type: registerActionTypes.REGISTER_SUCCESS, payload: res.data });
    return true;
  } catch (err) {
    dispatch({ type: registerActionTypes.REGISTER_FAILED });
    return false;
  }
};
