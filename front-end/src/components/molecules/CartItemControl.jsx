import styled from "styled-components"
import {IconButton} from "../atoms/IconButton"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"

const StyledCartItemControl = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 1rem 0;
` 
const ItemCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin: 0 .5rem;

	> h3 {
		margin-bottom: .15rem;
		font-weight: normal;
		font-size: 1rem;
	}
`

const DeleteItemButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;	
	font-size: .8rem;
	margin: 0 1rem;

	:hover {
		text-decoration: underline;
	}
`

const CartItemControl = ({ item, itemSubtract, itemAdd, itemRemove }) => {
	return(
		<StyledCartItemControl>
			<IconButton onClick={() => itemSubtract(item)}><MdKeyboardArrowLeft/></IconButton>
			<ItemCount><h3> {item.amountInCart} </h3></ItemCount>
			<IconButton onClick={() => itemAdd(item)}><MdKeyboardArrowRight/></IconButton>
			<DeleteItemButton onClick={() => itemRemove(item)}> Poista tuote </DeleteItemButton>
		</StyledCartItemControl>
	);
}
export { CartItemControl };