import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Book from "./Book/Book";
import ButtonRoot from "./Buttons/ButtonRoot";
import CircleRoot from "./Circle/CircleRoot";
import FollowUpRoot from "./FollowUp/FollowUpRoot";
import ChromeBar from "./Invent/ChromeBar";
import SnippetHighlight from "./Invent/SnippetHighlight";
import StatusRoot from "./Status/StatusRoot";
import UserList from "./Users/UserList";
import VideoRoot from "./Video/VideoRoot";

const AppRouting = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/create-book" component={Book} />
				<Route path="/users" component={UserList} />
				<Route path="/chromebar" component={ChromeBar} />
				<Route path="/buttons" component={ButtonRoot} />
				<Route path="/follow" component={FollowUpRoot} />
				<Route path="/videos" component={VideoRoot} />
				<Route path="/circles" component={CircleRoot} />
				<Route path="/snippet" component={SnippetHighlight} />
				<Route path="/status" component={StatusRoot} />
			</Switch>
		</Router>
	);
};

export default AppRouting;
