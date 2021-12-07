import styled from "styled-components";
import {IconButton} from "../atoms/IconButton";
import { MdClose } from "react-icons/md";
import {ConfirmButton} from "../atoms/ConfirmButton"
import {ClearButton} from "../atoms/ClearButton"


const StyledSelectionBox = styled.div`
	width: 100%;
	background-color: white;
	font-size: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

const SelectionHead = styled.div`
	width: 100%;
	font-weight: bold;
	font-size: .8rem;
	text-align: center;
	position: relative;
	height: fit-content;
	padding: calc(var(--margin) / 2);
	border-bottom: 1px solid ${props => props.theme.colors.background3};

	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;

	> :first-child {
		grid-column: 2 / 3;
	}

	> :last-child {
		justify-self: right;
		margin-right: var(--margin);
		grid-column: 3 / 4;
		font-size: calc(var(--icon-size) * 0.9);
		padding: .3rem;
	}
`

const SelectionContent = styled.div`
	width: 100%;
	overflow-y: scroll;

	/* Hide scrollbar */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar { /* Chrome, Safari and Opera */
		display: none; 
	}
`

const SelectionBottom = styled.div`
	border-top: 1px solid ${props => props.theme.colors.background3};
	width: 100%;
	display: flex;
	align-items: center;
	padding: var(--margin) 0;

	> * {
		margin-left: var(--margin);
		flex: 1;
	}

	> :last-child {
		margin-right: var(--margin);
	}
`

const SelectionBox = ({children, selectionName, onClose, onClear}) => {
	return (
		<StyledSelectionBox>
			<SelectionHead>
				<h3>{selectionName}</h3>
				<IconButton onClick={onClose}>
					<MdClose/>
				</IconButton>
			</SelectionHead>
			<SelectionContent>
				{children}
			</SelectionContent>
			<SelectionBottom>
				<ClearButton onClick={onClear}>Tyhjennä kaikki</ClearButton>
				<ConfirmButton onClick={onClose}>Näytä</ConfirmButton>
			</SelectionBottom>
		</StyledSelectionBox>
	);
}

export {SelectionBox};