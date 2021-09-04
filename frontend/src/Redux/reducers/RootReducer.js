import { combineReducers } from "redux";
import { Kitchens } from "./KitechReducer";
import { UserInfo } from "./UserInfoReducer";
export default combineReducers({
  UserInfo: UserInfo,
  Kitchens: Kitchens,
});
