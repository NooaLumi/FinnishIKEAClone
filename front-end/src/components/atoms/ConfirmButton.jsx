import styled from "styled-components";
import {PillButton} from "./PillButton";

const ConfirmButton = styled(PillButton)`
	background-color: black;
	color: white;
	transition: background-color .2s;

	:hover {
		background-color: rgb(50, 50, 50);
	}
` 

export {ConfirmButton };
