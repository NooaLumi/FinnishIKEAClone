import styled from "styled-components";

const PillButton = styled.button`
	height: 2.5rem;
	padding: 0 var(--margin);
	font-size: 0.75rem;
	font-weight: 700;
	white-space: nowrap;
	background-color: ${props => props.theme.colors.background2};

	display: inline-flex;
	align-items: center;

	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	outline: none;
	border: none;
	border-radius: 1000px;

	:hover {
		background-color: ${props => props.theme.colors.background3}
	}
`

export {PillButton}
