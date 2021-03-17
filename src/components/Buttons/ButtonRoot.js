import React from "react";
import Container, { CircularButton } from "./buttonStyle";

const ButtonRoot = () => {
    console.log(CircularButton);
	return (
		<Container>
			<CircularButton>Nick</CircularButton>
		</Container>
	);
};

export default ButtonRoot;
