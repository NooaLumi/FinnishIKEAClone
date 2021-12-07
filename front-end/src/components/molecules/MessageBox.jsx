import styled from "styled-components";
import {DividerIcon} from "../atoms/DividerIcon";
import {IconButton} from "../atoms/IconButton";
import { MdClose } from "react-icons/md";

const StyledMessageBox = styled.div`
	width: 100%;
	background-color: black;
	color: white;
	font-size: .8rem;
	padding: var(--margin);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const MessageControls = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-weight: bold;

	> * {
		margin-left: 1rem;
	}

	> :first-child {
		color: white;
		margin-right: .5rem;
		cursor: pointer;
		:hover {
			text-decoration: underline;
		}
	}

	> :last-child {
		font-size: 1rem;
		padding: 0.3rem;
	}
`

const StyledShowLink = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`

const MessageBox = ({children, onShowClick, onClose}) => {
	return (
		<StyledMessageBox>
			{children}
			<MessageControls>
				<StyledShowLink onClick={onShowClick}>Näytä</StyledShowLink>
				<DividerIcon color={"white"}/>
				<IconButton onClick={onClose} hoverColor={"#222"} color={"white"}>
					<MdClose/>
				</IconButton>
			</MessageControls>

		</StyledMessageBox>

	);
}

export {MessageBox};