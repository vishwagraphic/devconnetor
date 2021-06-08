import { registerActionTypes } from "./actionTypes";

export const initialState = {
  token: null,
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case registerActionTypes.REGISTER_REQUEST:
      return {
        token: payload,
        loading: true
      };
    case registerActionTypes.REGISTER_SUCCESS:
      return {
        token: payload,
        loading: false
      };
    case registerActionTypes.REGISTER_FAILED:
      return {
        loading: false
      };
    default:
      return state;
  }
}
