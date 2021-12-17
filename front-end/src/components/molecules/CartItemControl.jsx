import { IconButton } from "../atoms/buttons/IconButton";
import { PlainTextButton } from "../atoms/buttons/PlainTextButton";

import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const StyledCartItemControl = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 1rem 0;
`;
const ItemCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin: 0 0.5rem;

	> * {
		margin-bottom: 0.15rem;
		font-weight: normal;
		font-size: 1rem;
	}
`;

const CartItemControl = ({ item, itemSubtract, itemAdd, itemRemove }) => {
	return (
		<StyledCartItemControl>
			<IconButton onClick={() => itemSubtract(item)}>
				<MdKeyboardArrowLeft />
			</IconButton>
			<ItemCount>
				<p> {item.amountInCart} </p>
			</ItemCount>
			<IconButton onClick={() => itemAdd(item)}>
				<MdKeyboardArrowRight />
			</IconButton>
			<PlainTextButton onClick={() => itemRemove(item)}>
				Poista tuote
			</PlainTextButton>
		</StyledCartItemControl>
	);
};
export { CartItemControl };
