import React from "react"
import styled from "styled-components";
import formatPrice from "../../utils/formatPrice";


const StyledItemInfo = styled.div`
	> :nth-child(1) {
		font-size: 0.8rem;
	}
	> :nth-child(2) {
		font-size: 0.9rem;
	}
	> :nth-child(3) {
		font-weight: bold;
		margin-top: 0.5rem; 
		font-size: 0.9rem;
	}
`

const ItemInfo = ({ item }) => {
	return(
		<StyledItemInfo>
			<h3>{item.name}</h3>
			<p>{item.type}</p>
			<p>{formatPrice(item.price)}</p>
		</StyledItemInfo>
	);
}
export { ItemInfo };