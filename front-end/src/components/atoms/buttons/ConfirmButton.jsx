import styled from "styled-components";
import { PillButton } from "./PillButton";

const ConfirmButton = styled(PillButton)`
	background-color: black;
	color: white;
	transition: background-color 0.1s;

	:hover,
	:focus {
		background-color: rgb(30, 30, 30);
		color: white !important;
	}
`;

export { ConfirmButton };
