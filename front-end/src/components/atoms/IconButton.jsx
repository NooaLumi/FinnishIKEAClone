import React from "react"
import styled from "styled-components";

const StyledIconButton = styled.a`
	display: flex;
    justify-content: center;
    align-items: center;

	width: fit-content;
	height: fit-content;
	position: relative;

	cursor: pointer;
	font-size: var(--icon-size);
	color: ${props => props.color ? props.color : "black"};
	padding: 0.5rem;
	border-radius: 100%;

	:hover {
		background-color: ${props => props.hoverColor ? props.hoverColor : props.theme.colors.background2};
	}
`

const IconButton = ({onClick, children, color, hoverColor}) => {
	return(
		<StyledIconButton hoverColor={hoverColor} color={color} onClick={onClick}>
			{children}
		</StyledIconButton>
	);
}
export {IconButton};