import styled from "styled-components";

export const Wrapper = styled.div`
	height: 500px;
	width: 300px;
	background-color: lightpink;
	border: 0;
	outline: 0;
	border-radius: 10px;
	position: relative;
`;

export const TextArea = styled.textarea`
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 10px;
	text-align: center;
	font-size: 40px;
	resize: none;
	overflow-y: scroll;
	border: none;
	background-color: transparent;
	text-shadow: 0px 0px 0px #000;
	font-weight: bold;
	caret-color: red;
	caret-color: #fff;
	&::-webkit-scrollbar {
		display: none;
	}

	&:focus {
		border: none;
		outline: none;
	}
	color: white;
	text-transform: capitalize;
`;
