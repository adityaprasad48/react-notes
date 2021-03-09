import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	place-items: center;
	width: 50%;
`;

export const Heading = styled.h1`
	font-family: sans-serif;
	color: hotpink;
	text-align: center;
    letter-spacing: 5px;
    &:hover {
        color: hotpink;
        
    }
`;



export const Card = styled.div`
	display: flex;
	margin-bottom: 5px;
`;

export const Container = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

export const CardTitle = styled.span`
	flex: 1;
	padding: 5px;
	text-transform: capitalize;
	font-size: 18px;
	user-select: none;
`;

export const Input = styled.input`
	padding-left: 3px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid red;
	flex: 1;
	font-size: 18px;
	text-transform: capitalize;
	&:focus {
		outline: none;
		border: 2px solid red;
	}
`;

export const AddBtn = styled.button`
	padding: 12px;
	margin-left: 10px;
	border: none;
	font-size: 18px;
	border-radius: 5px;
	cursor: pointer;
	&:focus {
		outline: none;
        border: none
	}
`;

export const DeleteBtn = styled.button`
	padding: 2px;
	color: black;
	background-color: orange;
	width: 50px;
    font-size: 13px;
    font-weight: bold;
	border: none;
	border-radius: 5px;
	cursor: pointer;
    &:focus {
		outline: none;
        border: none
	}
`;

export const EditBtn = styled(DeleteBtn)`
	background-color: lightgreen;
    margin-left: 5px;
`;

export const P = styled.p`
	border-bottom: 2px dashed lightgreen;
	padding-bottom: 4px;
`;
