import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const userAdaptor = createEntityAdapter({});

const userSlice = createSlice({
	name: "users",
	initialState: userAdaptor.getInitialState({
		loading: false,
		author: "aditya",
	}),
	reducers: {
		loadUsers(state, action) {
			if (action.payload) {
				userAdaptor.addMany(state, action.payload);
			}
		},
		addUser(state, action) {
			if (action.payload) {
				userAdaptor.addOne(state, action.payload);
			}
		},
		updateUser(state, action) {
			if (action.payload) {
				userAdaptor.updateOne(state, action.payload);
			}
		},
		removeUser(state, action) {
			if (action.payload) {
				userAdaptor.removeOne(state, action.payload);
			}
		},
	},
});

export const { loadUsers, addUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

export const {
	selectById: selectUserById,
	// selectIds: selectUserIds,
	// selectEntities: selectUserEntities,
	selectAll: selectAllUsers,
	// selectTotal: selectTotalUsers
} = userAdaptor.getSelectors((state) => state.users);
