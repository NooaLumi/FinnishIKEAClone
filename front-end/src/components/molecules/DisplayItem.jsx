import { ItemInfo } from "./ItemInfo";
import { AddItemButton } from "../atoms/AddItemButton";

import { addItem } from "../../API/ShoppingCart";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import React, { useContext } from "react";
import styled from "styled-components";

const StyledDisplayItem = styled.div`
	padding: 1rem 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	/* Add hover behavior to AddItemButton on non-touchscreen devices */
	@media (hover: hover) {
		> :last-child {
			opacity: 0;
		}

		:hover {
			> :last-child {
				opacity: 1;
			}
		}
	}
`;

const ItemImage = styled.div`
	padding: 0.5rem;
	width: 100%;

	> img {
		max-width: 100%;
		height: auto;
	}
`;

const DisplayItem = ({ item }) => {
	const { itemAdded } = useContext(ShoppingCartContext);

	const addItemClicked = (e) => {
		addItem(item);
		itemAdded(item);
	};

	return (
		<StyledDisplayItem>
			<ItemImage>
				<img src={"/images/" + item.image} alt={item.name} />
			</ItemImage>
			<ItemInfo item={item} />
			<AddItemButton onClick={addItemClicked} />
		</StyledDisplayItem>
	);
};
export { DisplayItem };
