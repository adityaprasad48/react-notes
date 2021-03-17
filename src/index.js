import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouting from "./components/AppRouting";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./sass/main.scss";
import store from "./store/store";

ReactDOM.render(
	<Provider store={store}>
		<AppRouting />
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
