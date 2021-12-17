import styled from "styled-components";

const BlackoutScreen = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	margin: 0;
	padding: 0;
	height: 100vh;
	z-index: 2;
	background: rgba(0, 0, 0, 0.5);
`;

export { BlackoutScreen };
