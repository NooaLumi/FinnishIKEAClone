import { RomuLogo } from "../atoms/RomuLogo";
import { IconButton } from "../atoms/buttons/IconButton";
import { IconBar } from "../molecules/IconBar";
import { MdSearch, MdShoppingCart, MdMenu } from "react-icons/md";

import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
	width: 100%;
	height: var(--nav-height);

	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	z-index: 1;
	padding: calc(var(--margin) / 1.5) var(--margin);

	top: calc(var(--nav-height) * -1);
	transition: top 0.2s;

	${(props) =>
		props.sticky === true &&
		css`
			position: sticky;
			top: 0;
		`}
`;

const CartTotal = styled.div`
	border-radius: 100%;
	background-color: ${(props) => props.theme.colors.main};
	color: white;
	position: absolute;
	top: -3px;
	right: -2px;
	height: 1.2rem;
	width: 1.2rem;
	font-size: 0.7rem;

	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const StyledLink = styled(Link)`
	height: 100%;
`;

const Navigation = ({
	isSticky,
	showSearchIcon,
	searchIconOnClick,
	showCart = true,
	className,
}) => {
	const { itemsInCart } = useContext(ShoppingCartContext);

	return (
		<StyledNav sticky={isSticky} className={className}>
			<StyledLink to="/">
				<RomuLogo />
			</StyledLink>
			<IconBar>
				{showSearchIcon && (
					<IconButton onClick={searchIconOnClick}>
						<MdSearch />
					</IconButton>
				)}
				{showCart && (
					<Link to="/shoppingcart">
						<IconButton>
							<MdShoppingCart />
							{itemsInCart > 0 && (
								<CartTotal>{itemsInCart}</CartTotal>
							)}
						</IconButton>
					</Link>
				)}
				<IconButton>
					<MdMenu />
				</IconButton>
			</IconBar>
		</StyledNav>
	);
};

export { Navigation };
