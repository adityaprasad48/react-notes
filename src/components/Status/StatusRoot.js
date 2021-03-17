import React from "react";
import { TextArea, Wrapper } from "./statusStyles";

let STR = `Good Work Come With Good Things That Inspire You To Do Great Thing Than You Will Become A Great Man 
That Every One Will Remember Forever....`

const StatusRoot = () => {
	return (
		<Wrapper>
			<TextArea defaultValue={STR}></TextArea>
		</Wrapper>
	);
};

export default StatusRoot;
