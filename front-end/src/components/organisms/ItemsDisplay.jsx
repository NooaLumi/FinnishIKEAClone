import React from "react"
import styled from "styled-components";
import {DisplayItem} from "../molecules/DisplayItem";

const StyledItemsDisplay = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const ItemsDisplay = ({ items }) => {
	return(
			<StyledItemsDisplay>
				{items.map(item => (
					<DisplayItem item={item} key={item._id}/>
				))}
			</StyledItemsDisplay>
	);
}
export { ItemsDisplay };