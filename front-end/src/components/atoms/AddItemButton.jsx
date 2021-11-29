import React, {useState} from "react"
import {MdAddShoppingCart, MdDone } from "react-icons/md";
import styled, {css, keyframes} from "styled-components";

const pulse = keyframes`
	0% {
		top: 0px;
	}
	30% {
		top: calc(var(--icon-size) * -0.3);
	}
	100% {
		top: 0px;
	}
`

const StyledAddItemButton = styled.a`
	display: flex;
    justify-content: center;
    align-items: center;

	width: fit-content;
	height: fit-content;

	cursor: pointer;
	margin-left: auto;
	margin-top: -2rem;
	font-size: var(--icon-size);
	color: white;
	background-color: ${props => props.theme.colors.main};
	padding: 0.5rem;
	border-radius: 100%;
	transition: opacity .1s;

	:hover {
		filter:brightness(1.2);
	}

	${props => props.clickEvent && css`
		opacity: 1 !important;

		> * {
			position: relative;
			animation-name: ${pulse};
			animation-duration: 0.3s;
		}
	`}
`

const AddItemButton = ({onClick}) => {
	const [isAdding, setIsAdding] = useState(false);

	const onButtonClick = e => {
		setIsAdding(true);
		setTimeout(() => setIsAdding(false), 2000);
		onClick(e);
	}

	return(
		<StyledAddItemButton clickEvent={isAdding} onClick={e => !isAdding && onButtonClick(e)}>
			{isAdding ? <MdDone/> : <MdAddShoppingCart/> }
		</StyledAddItemButton>
	);
}
export {AddItemButton};