import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const booksAdapter = createEntityAdapter({
	// Assume IDs are stored in a field other than `book.id`
	selectId: (book) => book.id,
	// Keep the "all IDs" array sorted based on book titles
	// sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const booksSlice = createSlice({
	name: "books",
	initialState: booksAdapter.getInitialState({
		loading: "idle",
		author: "adi",
	}),
	reducers: {
		// addBook: booksAdapter.addOne,
		addBook(state, action) {
			if (action.payload) {
				booksAdapter.addOne(state, action.payload);
			}
		},

		addMoreBook(state, action) {
				console.log("addMoreBook");
				booksAdapter.addMany(state, action.payload);
		},

		// removeBook: booksAdapter.removeOne,
		removeBook(state, action) {
			booksAdapter.removeOne(state, action.payload);
		},

		// normal action
		booksLoading(state, action) {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		},

		// mixed with normal and adpator
		booksReceived(state, action) {
			if (state.loading === "pending") {
				booksAdapter.setAll(state, action.payload);
				state.loading = "idle";
			}
		},

		// updateBook: booksAdapter.updateOne,
		updateBook(state, action) {
			if (state.author === "adi") {
				booksAdapter.updateOne(state, action.payload);
			}
		},
	},
});

export const {
	addBook,
	addMoreBook,
	booksLoading,
	booksReceived,
	updateBook,
	removeBook,
} = booksSlice.actions;

export default booksSlice.reducer;

export const {
	selectById: selectBookById,
	// selectIds: selectUserIds,
	// selectEntities: selectUserEntities,
	selectAll: selectAllBooks,
	// selectTotal: selectTotalUsers
} = booksAdapter.getSelectors((state) => state.books);
