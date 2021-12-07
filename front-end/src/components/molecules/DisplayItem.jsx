import React, {useContext} from "react"
import styled from "styled-components";
import {ItemInfo} from "./ItemInfo";
import {AddItemButton} from "../atoms/AddItemButton";
import {addItem } from "../../API/ShoppingCart";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

const StyledDisplayItem = styled.div`
	padding: 1rem 1.5rem;
	border-bottom: 1px solid ${props => props.theme.colors.background3};

	/* Only show <addItemButton/> on hover if not on touchscreen */
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
`

const DisplayItemImage = styled.div`
	padding: 0.5rem;
	width: 100%;

	> img {
		width: 100%;
	}

	:hover > img {
	}
`

const DisplayItem = ({ item }) => {
	const {itemAdded} = useContext(ShoppingCartContext);

	const addItemClicked = e => {
		addItem(item);
		itemAdded(item);
	}

	return(
		<StyledDisplayItem>
			<DisplayItemImage> 
				<img src={"/images/" + item.image} alt={item.name}/>
			</DisplayItemImage>
			<ItemInfo item={item}/>
			<AddItemButton onClick={addItemClicked}/>
		</StyledDisplayItem>
	);
}
export { DisplayItem };