import styled from "styled-components";

export const CircularButton = styled.button`
	position: relative;
	top: 0px;
	left: 0px;
	border: none;
	outline: none;
	border: 1px solid lightgray;
	padding: 10px 20px;
	font-size: 18px;
	font-family: "Redressed", cursive;
	text-transform: uppercase;
	border-radius: 5px;
	border-bottom: 3px solid lightgreen;
	&:focus {
		border: none;
		transition: border 0.2s;
		box-shadow: 1px 2px #ddd;
	}

	&:hover {
		left: 2px;
		top: 3px;
		transition: all 0.5s;
	}
`;

const Container = styled.div`
	border: 1px solid green;
	width: 100%;
	padding: 10px;
	margin-left: 50px;
`;

export const Btn = styled.button`
	background-color: orange;
	color: black;
	padding: 5px 20px;
	border: none;
	outline: none;
	transition: all 0.2s ease;
	::before {
		content: "🍟";
	}
	:hover::after {
		content: "🧇";
	}
	::after {
		content: "🍟";
	}
	:hover::before {
		content: "🍞";
	}
	:hover {
		background-color: hotpink;
		color: white;
	}
`;

export default Container;
