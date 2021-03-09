import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, addUser, selectAllUsers, updateUser, removeUser } from "../reducers/userSlice";

const UserList = () => {
    const users = useSelector(selectAllUsers)
	const dispatch = useDispatch();
	const [input, setInput] = useState("");
	useEffect(() => {
		axios
			.get("https://randomuser.me/api/?results=10")
			.then((res) => {
				let results = res.data.results;

				const users = results.map((user) => ({
					id: user.login.uuid,
					name: `${user.name.first} ${user.name.last}`,
					image: user.picture.thumbnail,
				}));

				dispatch(loadUsers(users));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addUser({
				id: String(Math.random()),
				name: input,
				image: "https://placeimg.com/48/48/people",
			})
		);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<input type="submit" value="Add" />
			</form>
			<h1>User List</h1>
            <div>
                {users.map(user => (
                    <div>
                       <img src={user.image}/>
                       <input value={user.name} onChange={e => {
                           dispatch(updateUser({
                               id: user.id,
                               changes: {name: e.target.value}
                           }))
                       }}/>
                       <button onClick={() => dispatch(removeUser(user.id))}>Del</button>
                    </div>
                ))}
            </div>
		</div>
	);
};

export default UserList;
