import React from "react"
import styled from "styled-components";

const StyledIconButton = styled.a`
	display: flex;
    justify-content: center;
    align-items: center;

	width: fit-content;
	height: fit-content;

	cursor: pointer;
	font-size: var(--icon-size);
	color: black;
	padding: 0.5rem;
	border-radius: 100%;

	:hover {
		background-color: ${props => props.theme.colors.background2};
	}
`

const IconButton = ({onClick, children}) => {
	return(
		<StyledIconButton onClick={onClick}>
			{children}
		</StyledIconButton>
	);
}
export {IconButton};