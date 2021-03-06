import styled from "styled-components";

const DividerIcon = styled.div`
	width: 1px;
	background-color: ${props => props.color ? props.color : "black"};
	height: calc(var(--icon-size) / 1.5);
`

export {DividerIcon}
