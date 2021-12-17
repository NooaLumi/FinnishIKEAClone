import { DividerIcon } from "../atoms/DividerIcon";
import { IconButton } from "../atoms/buttons/IconButton";
import { PlainTextButton } from "../atoms/buttons/PlainTextButton";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const StyledMessageBox = styled.div`
	width: 100%;
	background-color: black;
	color: white;
	font-size: 0.8rem;
	padding: var(--margin);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

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
		margin-right: 0.5rem;
		cursor: pointer;
		:hover {
			text-decoration: underline;
		}
	}

	> :last-child {
		font-size: 1rem;
		padding: 0.3rem;
	}
`;

const MessageBox = ({
	children,
	onShowClick = () => null,
	onClose,
	closeOnly,
}) => {
	return (
		<StyledMessageBox>
			{children}
			<MessageControls>
				{!closeOnly && (
					<>
						<PlainTextButton onClick={onShowClick}>
							Näytä
						</PlainTextButton>
						<DividerIcon color={"white"} />
					</>
				)}
				<IconButton
					onClick={onClose}
					hoverColor={"#222"}
					color={"white"}
				>
					<MdClose />
				</IconButton>
			</MessageControls>
		</StyledMessageBox>
	);
};

export { MessageBox };
