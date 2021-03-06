import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { PillButton } from "../atoms/buttons/PillButton";

const StyledFilterBar = styled.div`
	padding: var(--margin) 0;
	display: flex;
	flex-flow: row;
	align-items: center;
	overflow-x: scroll;
	overflow-y: hidden;
	border-bottom: 1px solid ${(props) => props.theme.colors.background3};
	background-color: ${(props) => props.theme.colors.background};
	z-index: 2;

	position: sticky;
	transition: top 0.2s;
	top: ${(props) => (props.stickLower ? "3.75rem" : 0)};

	/* Hide scrollbar */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar {
		/* Chrome, Safari and Opera */
		display: none;
	}

	> * {
		margin-right: 0.5rem;
	}

	> :first-child {
		margin-left: 0.5rem;
	}
`;

const FilterButton = styled(PillButton)`
	:hover {
		background-color: ${(props) => props.theme.colors.background3};
	}
	> :last-child {
		font-size: calc(var(--icon-size) * 0.75);
		margin-left: 0.5rem;
	}
`;

const FilterBar = ({ stickLower, onChange, onClear }) => {
	return (
		<StyledFilterBar stickLower={stickLower}>
			<PillButton onClick={() => onChange("order")}>Järjestä</PillButton>
			<PillButton onClick={() => onChange("category")}>
				Kategoria
			</PillButton>
			<PillButton onClick={() => onChange("price")}> Hinta </PillButton>
			<FilterButton onClick={onClear}>
				Tyhjennä kaikki <MdClose />
			</FilterButton>
		</StyledFilterBar>
	);
};

export { FilterBar };
