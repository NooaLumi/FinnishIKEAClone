import { Navigation } from "../components/organisms/Navigation";
import { NotificationBar} from "../components/organisms/NotificationBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { FilterBar } from "../components/organisms/FilterBar";
import { ItemsDisplay } from "../components/organisms/ItemsDisplay";
import {Summary} from "../components/atoms/Summary";
import {StoreTemplate} from "../templates/StoreTemplate";
import {getAllItems} from "../API/Items";
import {getItemsCount} from "../API/ShoppingCart";
import getCSSVariable from "../utils/getCSSVariable";
import styled from "styled-components";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import useDelayedValue from "../hooks/DelayedValue";
import {SelectionBox} from "../components/molecules/SelectionBox";
import {RadioButton} from "../components/atoms/RadioButton";

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
	const [itemCount, setItemCount] = useState(getItemsCount);
	const [items, setItems] = useState([]);
	const [notifications, setNotifications] = useState([]);
	const [query, setQuery] = useState("");

	const delayedQuery = useDelayedValue(query, 400);

	// Focus on search bar when the menu search icon is clicked
	const searchIconOnClick = (e) => {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0; 

		searchEl.current.focus();
	};

	const onQueryChange = e => setQuery(e.target.value);

	const filteredItems = items.filter(i => 
			i.name.toLowerCase().includes(delayedQuery.toLowerCase())
			|| i.type.toLowerCase().includes(delayedQuery.toLowerCase()));

	const itemAdded = (item) => {
		setItemCount(itemCount + 1);

		/*
		setNotifications([...notifications, {
			link: "#",
			message: `${item.name} lisätty ostoskoriin.`
		}])
		*/
	}

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
			<ShoppingCartContext.Provider value={{itemCount, itemAdded}}>
				<NotificationBar notifications={notifications} setNotifications={setNotifications} />
				<Navigation
					isSticky={stickNav}
					showSearchIcon={showSearchIcon}
					searchIconOnClick={searchIconOnClick}
				/>
				<SearchSection>
					<SearchBar ref={searchEl} onChange={onQueryChange} value={query} />
				</SearchSection>
				{delayedQuery && 
					<Summary>
						Näytetään hakutulokset haulle <b>"{delayedQuery}"</b>
					</Summary>
				}
				<FilterBar stickLower={stickNav} />
				<SelectionBox selectionName="Järjestä">
					<div>
						<RadioButton name="Järjestä" value="Edullisin Hinta"/>
						<RadioButton name="Järjestä" value="Korkein Hinta"/>
						<RadioButton name="Järjestä" value="Nimi"/>
					</div>
				</SelectionBox>
				<ItemsDisplay items={filteredItems}/>
			</ShoppingCartContext.Provider>
		</StyledStorePage>
	);
};

export { Home };
