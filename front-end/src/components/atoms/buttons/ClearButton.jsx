import styled from "styled-components";
import { PillButton } from "./PillButton";

const ClearButton = styled(PillButton)`
	background-color: white;
	color: black;
	border: 1px solid ${(props) => props.theme.colors.background3};
	transition: border 0.1s;

	:hover,
	:focus {
		border-color: black;
		background-color: white;
	}
`;

export { ClearButton };
