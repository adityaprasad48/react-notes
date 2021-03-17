import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
	addBook,
	addMoreBook,
	removeBook,
	selectAllBooks,
	updateBook,
} from "../../reducers/booksSlice";
import {
	AddBtn,
	Card,
	CardTitle,
	Container,
	DeleteBtn,
    Heading,
    Wrapper,
	EditBtn,
	Input,
	P,
} from "../../styled";




const Book = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");
	const [more, setMore] = useState(false);
	const allBooks = useSelector(selectAllBooks);
	// const foundBook = useSelector(selectBookById);

	const handleChange = (e) => {
		setInput(e.target.value);

		if (input.includes(",")) {
			setMore(true);
		}
	};

	const handleBook = (e) => {
		e.preventDefault();
		console.log(input);
		if (input && !more) {
			dispatch(
				addBook({
					id: uuidv4(),
					title: input,
				})
			);
		}

		if (input && more) {
			let arr = input
				.split(",")
				.concat()
				.map((item) => ({
					id: uuidv4(),
					title: item,
				}));

			dispatch(addMoreBook(arr));
		}
		setInput("");
	};

	const handleDelete = (id) => {
		dispatch(removeBook(id));
	};

	const handleEdit = (id) => {
		dispatch(
			updateBook({
				id: id,
				changes: {
					title: "Alto...........",
				},
			})
		);
	};

	return (
		<Wrapper>
            <form onSubmit={handleBook}>
			<Heading>Book Store</Heading>
			<P>Enter Single Book or Multiple book by using comma sepreator.</P>
			<Container>
				<Input type="text" onChange={handleChange} value={input} />
				<AddBtn type="submit">Add Book</AddBtn>
			</Container>
			{allBooks?.map((book) => (
				<Card key={book.id}>
					<CardTitle contentEditable>{book.title}</CardTitle>
					<DeleteBtn onClick={() => handleDelete(book.id)}>
						Del
					</DeleteBtn>
					<EditBtn onClick={() => handleEdit(book.id)}>Edit</EditBtn>
				</Card>
			))}
		</form>
        </Wrapper>
	);
};

export default Book;
