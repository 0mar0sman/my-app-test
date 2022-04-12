import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { IDemo } from "./interfaces";
import { fetchOwner, fetchAllOwner } from "../../service/owner";

export const getAllDemo = () => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetchOwner(271880);
      console.log("Action");
      return dispatch({ type: ActionTypes.FETCH_DEMO_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: ActionTypes.FETCH_DEMO_FAILED, payload: error });
    }
  };
};

export const getAreaById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetchAllOwner();
      return dispatch({
        type: ActionTypes.FETCH_ALL_DEMO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ActionTypes.FETCH_ALL_DEMO_FAILED,
        payload: error,
      });
    }
  };
};
