import { Navigation } from "../components/organisms/Navigation";
import { CartItem } from "../components/molecules/CartItem";
import { CheckoutControls } from "../components/organisms/CheckoutControls";
import { Header } from "../components/atoms/Header";
import { CartTemplate } from "../templates/CartTemplate";
import { NotificationBar } from "../components/organisms/NotificationBar";

import { getItems } from "../API/ShoppingCart";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import { device } from "../utils/theme";
import getCSSVariable from "../utils/getCSSVariable";
import { scrollToTop } from "../utils/scrollToTop";

import { useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const CartItemList = styled.div`
	@media ${device.tablet} {
		margin: 0 5%;
	}

	@media ${device.laptop} {
		margin: 0 10%;
	}

	@media ${device.laptopL} {
		margin: 0 15%;
	}

	@media ${device.desktop} {
		margin: 0 20%;
	}
`;

const CartPage = ({ className }) => {
	const prevScrollY = useRef(0);
	const [stickNav, setStickNav] = useState(true);
	const navigate = useNavigate();
	const [items, setItems] = useState(getItems());
	const [notifications, setNotifications] = useState([]);

	const itemsUpdate = (e) => {
		setItems(getItems());
		setNotifications([
			...notifications,
			{
				message: `${e.item.name} ${
					e.action === "add"
						? "lisätty ostoskoriin."
						: "poistettu ostoskorista."
				}`,
				id: e.item._id + notifications.length + Math.random(),
			},
		]);
	};

	const searchIconOnClick = (e) => {
		scrollToTop();
		navigate("/store");
	};

	// Handle sticky display behavior
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// No sticky when scrolling downwards
			if (prevScrollY.current < currentScrollY) {
				stickNav && setStickNav(false);
				// Sticky if scrolled past nav
			} else if (currentScrollY > getCSSVariable("--nav-height")) {
				!stickNav && setStickNav(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [stickNav]);

	return (
		// Children can trigger itemsUpdate
		<ShoppingCartContext.Provider value={{ itemsUpdate: itemsUpdate }}>
			<CartTemplate className={className}>
				<NotificationBar
					closeOnly={true}
					notifications={notifications}
					setNotifications={setNotifications}
				/>
				<Navigation
					isSticky={stickNav}
					showSearchIcon={true}
					searchIconOnClick={searchIconOnClick}
					showCart={false}
				/>
				<CartItemList>
					<Header> Ostoskori </Header>
					{items.map((item) => (
						<CartItem item={item} key={item._id} />
					))}
					<CheckoutControls items={getItems()} />
				</CartItemList>
			</CartTemplate>
		</ShoppingCartContext.Provider>
	);
};

export { CartPage };
