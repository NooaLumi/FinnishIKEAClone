import { IconButton } from "./buttons/IconButton";
import { MdAddShoppingCart, MdDone } from "react-icons/md";
import styled, { css, keyframes } from "styled-components";
import React, { useState } from "react";

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
`;

const StyledAddItemButton = styled(IconButton)`
	background-color: ${(props) => props.theme.colors.main} !important;
	margin-left: auto;
	margin-top: -2rem;
	color: white;

	:hover {
		background-color: ${(props) => props.theme.colors.main};
		filter: brightness(1.2);
	}

	${(props) =>
		props.clickEvent &&
		css`
			opacity: 1 !important;

			> * {
				position: relative;
				animation-name: ${pulse};
				animation-duration: 0.3s;
			}
		`}
`;

const AddItemButton = ({ onClick }) => {
	const [isAdding, setIsAdding] = useState(false);

	const onButtonClick = (e) => {
		setIsAdding(true);
		setTimeout(() => setIsAdding(false), 2000);
		onClick(e);
	};

	return (
		<StyledAddItemButton
			clickEvent={isAdding}
			onClick={(e) => !isAdding && onButtonClick(e)}
		>
			{isAdding ? <MdDone /> : <MdAddShoppingCart />}
		</StyledAddItemButton>
	);
};
export { AddItemButton };
