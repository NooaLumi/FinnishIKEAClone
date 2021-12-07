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
		margin-top: 0.5rem; 
		font-size: 0.9rem;
	}
`

const ItemInfo = ({ item, pricePerPiece = false }) => {
	return(
		<StyledItemInfo>
			<h3>{item.name}</h3>
			<p>{item.type}</p>
			{pricePerPiece 
				? <p><strong>{formatPrice(item.price)}</strong>/kpl</p>
				: <p><strong>{formatPrice(item.price)}</strong></p>
			}
		</StyledItemInfo>
	);
}
export { ItemInfo };