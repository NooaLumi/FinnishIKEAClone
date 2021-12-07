import styled from "styled-components";

const PillButton = styled.button`
	height: 2.5rem;
	padding: 0 var(--margin);
	font-size: 0.75rem;
	font-weight: 700;
	white-space: nowrap;
	color: ${props => props.color ? props.color : "black"};
	background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.background2};

	display: inline-flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	outline: none;
	border: none;
	border-radius: 1000px;

	:hover {
		background-color: ${props => props.hoverBgColor ? props.hoverBgColor : props.theme.colors.background3};
		color: ${props => props.hoverColor ? props.hoverColor : "black"};
	}
`

export {PillButton}
