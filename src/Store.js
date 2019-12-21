import { applyMiddleware } from "redux";
import { createStore } from "react-hooks-global-state";
import reducer from "./reducers";

const initialState = {
  transactions: [],
  notifies: [],
  students: [],
  teachers: [],
  users: [],
  timekeeping: [],
  skillGroups: [],
  skills: []
};

var logger = function(_a) {
  return function(next) {
    return function(action) {
      // console.log("will dispatch", action);
      var returnValue = next(action);
      // console.log("state after dispatch", getState());
      return returnValue;
    };
  };
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState,
  applyMiddleware(logger)
);
