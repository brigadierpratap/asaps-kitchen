import * as ActionTypes from "../actions/ActionTypes";

export const Kitchens = (
  state = {
    isLoading: false,
    errMess: null,
    info: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_KITCHEN_INFO:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        info: action.payload,
      };
    default:
      return state;
  }
};
