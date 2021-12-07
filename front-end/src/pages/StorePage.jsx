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
import {sortItems} from "../utils/sortItems";
import {filterItems, getPriceRanges} from "../utils/filterItems";
import styled from "styled-components";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import useDelayedValue from "../hooks/DelayedValue";
import {FilterEdit} from "../components/organisms/FilterEdit";
import {PriceFilter} from "../components/organisms/PriceFilter";
import {CategoryFilter} from "../components/organisms/CategoryFilter";
import {OrderFilter} from "../components/organisms/OrderFilter";


import { useState, useEffect, useRef } from "react";

const SearchSection = styled.div`
	margin: 0 calc(var(--margin) * 0.7);
`

const StorePage = () => {
	const prevScrollY = useRef(0);
	const searchEl = useRef(null);
	const [stickNav, setStickNav] = useState(false);
	const [showSearchIcon, setShowSearchIcon] = useState(false);
	const [itemCount, setItemCount] = useState(getItemsCount);
	const [items, setItems] = useState([]);
	const [notifications, setNotifications] = useState([]);
	const [editingFilter, setEditingFilter] = useState(null);

	const [query, setQuery] = useState("");
	const [sortOrder, setSortOrder] = useState("name-desc");
	const [categoryFilter, setCategoryFilter] = useState(null);
	const [priceRanges, setPriceRanges] = useState(getPriceRanges(items));

	const delayedQuery = useDelayedValue(query, 400);

	// Focus on search bar when the menu search icon is clicked
	const searchIconOnClick = (e) => {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0; 

		searchEl.current.focus();
	};

	const onSortOrderChange = e => setSortOrder(e.target.value);
	const onCategoryFilterChange = e => setCategoryFilter(e.target.value);
	const onQueryChange = e => setQuery(e.target.value);
	const onQueryClear = () => setQuery("");
	const closeFilterEdit = () => setEditingFilter(null);

	const editingFilterChange = filter => {
		setEditingFilter(filter ? filter : null);
	}

	const readyItems = () => sortItems(
			filterItems(items, delayedQuery, categoryFilter, priceRanges), 
		sortOrder);

	const itemAdded = (item) => {
		setItemCount(itemCount + 1);

		setNotifications([...notifications, {
			link: "#",
			message: `${item.name} lisätty ostoskoriin.`,
			id: item._id
		}])
	}

	// Fetch items to display
	useEffect(() => {
		getAllItems()
			.then(items => setItems(items));
	}, []);

	useEffect(() => {
		setPriceRanges(getPriceRanges(readyItems()));

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, delayedQuery, categoryFilter]);

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
		<StoreTemplate>
			<ShoppingCartContext.Provider value={{itemCount, itemAdded}}>
				<NotificationBar notifications={notifications} setNotifications={setNotifications} />
				<Navigation
					isSticky={stickNav}
					showSearchIcon={showSearchIcon}
					searchIconOnClick={searchIconOnClick}
				/>
				<SearchSection>
					<SearchBar onClear={onQueryClear} ref={searchEl} onChange={onQueryChange} value={query} />
				</SearchSection>
				{delayedQuery && 
					<Summary>
						Näytetään hakutulokset haulle <b>"{delayedQuery}"</b>
					</Summary>
				}
				<FilterBar stickLower={stickNav} onChange={editingFilterChange}/>
					<FilterEdit>
					{ editingFilter === "order" ?
						(
							<OrderFilter onClose={closeFilterEdit} onChange={onSortOrderChange} checked={sortOrder}/>
						)
						: editingFilter === "category" ?
						(
							<CategoryFilter onClose={closeFilterEdit} onChange={onCategoryFilterChange} checked={categoryFilter}/>

						) : editingFilter === "price" ? 
						(
							<PriceFilter onClose={closeFilterEdit} priceRanges={priceRanges} setPriceRanges={setPriceRanges}/>
						) : ""
					}
					</FilterEdit>
				<ItemsDisplay items={readyItems()}/>
			</ShoppingCartContext.Provider>
		</StoreTemplate>
	);
};

export { StorePage };
