import { MdSearch, MdShoppingCart, MdMenu } from "react-icons/md";
import styled, {css} from "styled-components";
import {RomuLogo} from "../atoms/RomuLogo";
import {IconButton} from "../atoms/IconButton";
import {IconBar} from "../molecules/IconBar";

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

	${props => props.sticky === true && css`
		position: sticky;
		top: 0;
	`}
`

const Navigation = ({ isSticky, showSearchIcon, searchIconOnClick }) => {
	return (
		<StyledNav sticky={isSticky}>
			<RomuLogo/>
			<IconBar>
				{showSearchIcon && <MdSearch onClick={searchIconOnClick} />}
				<IconButton> <MdShoppingCart /></IconButton>
				<IconButton> <MdMenu /> </IconButton>
			</IconBar>
		</StyledNav>
	);
};

export { Navigation };
