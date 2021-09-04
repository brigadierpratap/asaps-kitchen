import * as ActionTypes from "./ActionTypes";
export const fetchUserInfo = () => async dispatch => {
  dispatch(getUserInfoLoading());
  fetch(process.env.REACT_APP_API_URL + "/getuser", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 1) {
        dispatch(getUserInfo(data.message));
      } else throw new Error();
    })
    .catch(e => {
      dispatch(getUserInfoFailed());
    });
};

export const updateUserInfoThunk = data => dispatch => {
  dispatch(getUserInfo(data));
};
const getUserInfoLoading = () => ({
  type: ActionTypes.UPDATE_USER_INFO_LOADING,
});
const getUserInfoFailed = err => ({
  type: ActionTypes.UPDATE_USER_INFO_FAILED,
  payload: err,
});
const getUserInfo = data => ({
  type: ActionTypes.UPDATE_USER_INFO,
  payload: data,
});

export const updateKitchenList = data => dispatch => {
  dispatch(updateKitchen(data));
};

const updateKitchen = data => ({
  type: ActionTypes.UPDATE_KITCHEN_INFO,
  payload: data,
});
