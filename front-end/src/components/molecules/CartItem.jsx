import { ItemInfo } from "./ItemInfo";
import { CartItemControl } from "./CartItemControl";

import formatPrice from "../../utils/formatPrice";
import { device } from "../../utils/theme";
import { removeItem, addItem, subtractItem } from "../../API/ShoppingCart";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import styled from "styled-components";
import React, { useContext } from "react";

const StyledCartItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	flex-wrap: wrap;
	align-items: center;
	margin: 0 var(--margin);
	margin-bottom: 1rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.background3};

	> :nth-child(3) {
		flex: 1 1 100%;
	}
`;

const ItemInfoBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	flex: 1 1 30%;

	> * {
		margin: 0.2rem 0.8rem;
	}
`;

const StyledItemImage = styled.img`
	width: 30%;
	min-width: 80px;

	@media ${device.tablet} {
		width: 25%;
	}

	@media ${device.laptop} {
		width: 20%;
	}

	@media ${device.laptopL} {
		width: 15%;
	}
`;

const ItemTotalPrice = styled.h3`
	font-size: 1rem;
	flex: 1 1 10%;
	align-self: flex-start;
	text-align: right;
	margin: 0.5rem 0.5rem;
`;

const CartItem = ({ item, className }) => {
	const { itemsUpdate } = useContext(ShoppingCartContext);

	const itemAdd = (item) => {
		addItem(item);
		itemsUpdate({ action: "add", item: item });
	};

	const itemRemove = (item) => {
		removeItem(item);
		itemsUpdate({ action: "remove", item: item });
	};

	const itemSubtract = (item) => {
		subtractItem(item);
		itemsUpdate({ action: "remove", item: item });
	};

	return (
		<StyledCartItem className={className}>
			<ItemInfoBox>
				<StyledItemImage
					src={"/images/" + item.image}
					alt={item.name}
				/>
				<ItemInfo item={item} pricePerPiece />
			</ItemInfoBox>
			<ItemTotalPrice>
				{formatPrice(item.amountInCart * item.price)}
			</ItemTotalPrice>
			<CartItemControl
				item={item}
				itemAdd={itemAdd}
				itemRemove={itemRemove}
				itemSubtract={itemSubtract}
			/>
		</StyledCartItem>
	);
};
export { CartItem };
