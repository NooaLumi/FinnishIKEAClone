import React from "react"
import styled from "styled-components";
import {ItemInfo} from "./ItemInfo";
import {AddItemButton} from "../atoms/AddItemButton";
import {addItem } from "../../API/ShoppingCart";



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

const DisplayItemImage = styled.img`
	padding: 0.5rem;
	width: 100%;
`

const DisplayItem = ({ item }) => {
	const addItemClicked = e => {
		addItem(item);
	}

	return(
		<StyledDisplayItem>
			<DisplayItemImage src={"/images/" + item.image} alt={item.name}/>
			<ItemInfo item={item}/>
			<AddItemButton onClick={addItemClicked}/>
		</StyledDisplayItem>
	);
}
export { DisplayItem };