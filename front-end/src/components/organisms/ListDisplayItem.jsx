import styled from "styled-components"
import {ItemInfo} from "../molecules/ItemInfo"
import {CartItemControl} from "../molecules/CartItemControl"
import formatPrice from "../../utils/formatPrice"
import {removeItem, addItem, subtractItem} from "../../API/ShoppingCart"
import CartUpdateContext from "../../contexts/CartUpdateContext"
import React, {useContext} from "react"
import {device} from "../../utils/theme"

const StyledListDisplayItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	flex-wrap: wrap;
	align-items: center;
	margin: 0 var(--margin);
	margin-bottom: 1rem;
	border-bottom: 1px solid ${props => props.theme.colors.background3};

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
		margin: .2rem .8rem;
	}
`

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
`

const ItemPriceDisplay = styled.h3`
	font-size: 1rem;
	flex: 1 1 10%;
	align-self: flex-start;
	text-align: right;
	margin: .5rem .5rem;
`

const ListDisplayItem = ({ item, className }) => {
	const {itemsUpdate} = useContext(CartUpdateContext);

	const itemAdd = (item) => {
		addItem(item);
		itemsUpdate();
	}

	const itemRemove = (item) => {
		removeItem(item);
		itemsUpdate();
	}

	const itemSubtract = (item) => {
		subtractItem(item);
		itemsUpdate();
	}

	return(
		<StyledListDisplayItem className={className}>
			<ItemInfoBox>
				<StyledItemImage src={"/images/" + item.image} alt={item.name}/>
				<ItemInfo item={item} pricePerPiece/>
			</ItemInfoBox>
			<ItemPriceDisplay> {formatPrice(item.amountInCart * item.price)}</ItemPriceDisplay>
			<CartItemControl item={item} itemAdd={itemAdd} itemRemove={itemRemove} itemSubtract={itemSubtract}/>
		</StyledListDisplayItem>
	);
}
export { ListDisplayItem };