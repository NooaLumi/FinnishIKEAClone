import styled from "styled-components";

const HomeTemplate = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	background-image: linear-gradient(${props => props.theme.colors.main}, ${props => props.theme.colors.secondary});
`

export {HomeTemplate}