import { Reducer } from "redux";
import { ActionTypes } from "./types";
import { demoState, defaultState } from "./interfaces";

export const demoReducer: Reducer<demoState> = (
  state = defaultState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_ALL_DEMO_SUCCESS: {
      return { ...state, all: payload };
    }
    case ActionTypes.FETCH_ALL_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    case ActionTypes.DELETE_ALL_DEMO_SUCCESS: {
      return { ...state, all: [] };
    }
    case ActionTypes.DELETE_ALL_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    case ActionTypes.FETCH_DEMO_SUCCESS: {
      return { ...state, one: payload.data };
    }
    case ActionTypes.FETCH_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    case ActionTypes.CREATE_DEMO_SUCCESS: {
      return { ...state, one: payload };
    }
    case ActionTypes.CREATE_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    case ActionTypes.EdITE_DEMO_SUCCESS: {
      return { ...state, one: payload };
    }
    case ActionTypes.EdITE_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    case ActionTypes.DELETE_DEMO_SUCCESS: {
      return { ...state, one: {} };
    }
    case ActionTypes.DELETE_DEMO_FAILED: {
      return { ...state, errorMessage: payload.response.status };
    }
    default: {
      return state;
    }
  }
};
