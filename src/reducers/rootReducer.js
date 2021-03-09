import { combineReducers } from "redux";
import booksSlice from "./booksSlice";
import userSlice from "./userSlice";

export default combineReducers({
	books: booksSlice,
	users: userSlice,
});
