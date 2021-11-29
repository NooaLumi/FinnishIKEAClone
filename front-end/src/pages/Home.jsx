import { Navigation } from "../components/organisms/Navigation";
import { SearchBar } from "../components/molecules/SearchBar";
import { FilterBar } from "../components/organisms/FilterBar";
import { ItemsDisplay } from "../components/organisms/ItemsDisplay";
import {Summary} from "../components/atoms/Summary";
import {StoreTemplate} from "../templates/StoreTemplate";
import {getAllItems} from "../API/Items";
import getCSSVariable from "../utils/getCSSVariable";
import styled from "styled-components";

import { useState, useEffect, useRef } from "react";

const SearchSection = styled.div`
	margin: 0 calc(var(--margin) * 0.7);
`

const StyledStorePage = styled(StoreTemplate)`
`

const Home = () => {
	const prevScrollY = useRef(0);
	const searchEl = useRef(null);
	const [stickNav, setStickNav] = useState(false);
	const [showSearchIcon, setShowSearchIcon] = useState(false);
	
	const [items, setItems] = useState([]);

	// Focus on search bar when the menu search icon is clicked
	const searchIconOnClick = (e) => {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0; 

		searchEl.current.focus();
	};

	// Fetch items to display
	useEffect(() => {
		getAllItems()
			.then(items => setItems(items));
	}, []);

	// Handle sticky display behavior
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show search icon when scrolled past nav
			if (currentScrollY > getCSSVariable("--nav-height")) {
				!showSearchIcon && setShowSearchIcon(true);
			} else {
				showSearchIcon && setShowSearchIcon(false);
			}

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
	}, [stickNav, showSearchIcon]);

	return (
		<StyledStorePage>
			<Navigation
				isSticky={stickNav}
				showSearchIcon={showSearchIcon}
				searchIconOnClick={searchIconOnClick}
			/>
			<SearchSection>
				<SearchBar ref={searchEl} />
			</SearchSection>
			<Summary>
				Näytetään hakutulokset haulle <b>"NULL"</b>
			</Summary>
			<FilterBar stickLower={stickNav} />
			<ItemsDisplay items={items}/>
		</StyledStorePage>
	);
};

export { Home };
