import React from "react";
import styled from "styled-components";

const ChromeBar = ({ children }) => {
	return (
		<Container>
			<Bar>
				<Dot>🥥</Dot>
			</Bar>

			<Content>{children}</Content>
		</Container>
	);
};

export default ChromeBar;

const Content = styled.div`
	padding-left: 10px;
	padding-right: 10px;
`;

const Container = styled.div`
	box-sizing: border-box;
	border: 5px solid lightgray;
	border-top: none;
	margin: 5rem;
	position: relative;
	min-height: 80px;

	border-radius: 5px;
`;

const Bar = styled.div`
	box-sizing: border-box;
	height: 30px;
	width: 100%;
	padding-left: 5px;
	background-color: lightgray;
	display: flex;
	align-items: center;
`;

const Dot = styled.span`
	display: flex;
	align-items: center;
	cursor: pointer;

	::before {
		content: "🌰";
		margin-right: 10px;
	}

	::after {
		content: "🥗";
		margin-left: 10px;
	}
`;
