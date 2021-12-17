import styled from "styled-components";

const PlainTextButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 0.8rem;
	margin: 0 1rem;

	:hover,
	:focus {
		outline: none;
		text-decoration: underline;
	}
`;

export { PlainTextButton };
