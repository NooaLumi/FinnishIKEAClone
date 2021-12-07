import React, {useRef, useState, useEffect} from "react";
import getCSSVariable from "../utils/getCSSVariable";
import {Navigation} from "../components/organisms/Navigation"
import {ListDisplayItem} from "../components/organisms/ListDisplayItem"
import {CheckoutControls} from "../components/organisms/CheckoutControls"
import { useNavigate } from 'react-router-dom';
import {getItems} from "../API/ShoppingCart"
import CartUpdateContext from "../contexts/CartUpdateContext";
import styled from "styled-components"

const CartHead = styled.h2`
	font-size: 1.5rem;
	padding: calc(var(--margin) / 2) var(--margin) calc(var(--margin) * 2) var(--margin);
`

const CartPage = ({className}) => {
	const prevScrollY = useRef(0);
	const [stickNav, setStickNav] = useState(true);
	const navigate = useNavigate();
	const [items, setItems] = useState(getItems());

	const searchIconOnClick = (e) => {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0; 
		navigate("/store");
	};

	const itemsUpdate = () => setItems(getItems());
	

	// Handle sticky display behavior
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Remove sticky property when scrolling downwards
			if (prevScrollY.current < currentScrollY) {
				stickNav && setStickNav(false);
			// Add sticky property if scrolled past nav 
			} else if (currentScrollY > getCSSVariable("--nav-height")) {
				!stickNav && setStickNav(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [stickNav]);
	

	return(
		<CartUpdateContext.Provider value={{items: items, itemsUpdate: itemsUpdate}}>
			<div className={className}>
				<Navigation
					isSticky={true}
					showSearchIcon={true}
					searchIconOnClick={searchIconOnClick}
					showCart={false}
				/>
				<CartHead> Ostoskori </CartHead>
				{getItems().map(item => (
					<ListDisplayItem item={item} key={item._id}/>
				))}
				<CheckoutControls items={getItems()}/>
			</div>
		</CartUpdateContext.Provider>
	);
}
export { CartPage };