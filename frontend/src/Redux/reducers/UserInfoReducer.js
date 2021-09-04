import * as ActionTypes from "../actions/ActionTypes";

export const UserInfo = (
  state = {
    isLoading: false,
    errMess: null,
    info: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_INFO:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        info: action.payload,
      };
    case ActionTypes.UPDATE_USER_INFO_LOADING:
      return { ...state, isLoading: true, errMess: null, info: [] };
    case ActionTypes.UPDATE_USER_INFO_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, info: [] };
    default:
      return state;
  }
};
