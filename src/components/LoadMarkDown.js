import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import reducerPath from "./docs/reducer.md";

const LoadReducer = () => {
	const [text, setText] = useState("");
	useEffect(() => {
		fetch(reducerPath)
			.then((response) => response.text())
			.then((data) => {
				setText(data);
			});
	}, []);
	return (
		<div>
			<ReactMarkdown source={text} />
		</div>
	);
};

export default LoadReducer;
