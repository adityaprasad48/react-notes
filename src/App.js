import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./components/Book";
import UserList from "./components/UserList";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Book} />
				<Route path="/users" component={UserList} />
				<Route path="/new"  />
				<Route path="/search"  />
			</Switch>
		</Router>
	);
}
