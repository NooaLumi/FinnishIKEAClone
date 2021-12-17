import { Navigation } from "../components/organisms/Navigation";
import { NotificationBar } from "../components/organisms/NotificationBar";
import { SearchBar } from "../components/molecules/SearchBar";
import { FilterBar } from "../components/organisms/FilterBar";
import { ItemsDisplay } from "../components/organisms/ItemsDisplay";
import { Summary } from "../components/atoms/Summary";
import { BlackoutScreen } from "../components/atoms/BlackoutScreen";
import { FilterEdit } from "../components/organisms/FilterEdit";
import { PriceFilter } from "../components/organisms/PriceFilter";
import { CategoryFilter } from "../components/organisms/CategoryFilter";
import { OrderFilter } from "../components/organisms/OrderFilter";
import { StoreTemplate } from "../templates/StoreTemplate";

import useDelayedValue from "../hooks/DelayedValue";
import ShoppingCartContext from "../contexts/ShoppingCartContext";
import { getAllItems } from "../API/Items";
import { getItemsCount as getItemsInCart } from "../API/ShoppingCart";
import { filterItems, getPriceRanges } from "../utils/filterItems";
import getCSSVariable from "../utils/getCSSVariable";
import { sortItems } from "../utils/sortItems";
import { scrollToTop } from "../utils/scrollToTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const defaultSortOrder = "name-desc";

const NoResultsText = styled(Summary)`
	text-align: center;
	margin-top: 2.5rem;
`;

const StorePage = () => {
	// UI state
	const prevScrollY = useRef(0);
	const searchEl = useRef(null);
	const [stickNav, setStickNav] = useState(false);
	const [showSearchIcon, setShowSearchIcon] = useState(false);
	const [editFilter, setEditFilter] = useState(null);
	const [notifications, setNotifications] = useState([]);

	// Data
	const [items, setItems] = useState([]);
	const [itemsInCart, setItemsInCart] = useState(getItemsInCart);

	// Filters and sorts
	const [query, setQuery] = useState("");
	const delayedQuery = useDelayedValue(query, 400);
	const [sortOrder, setSortOrder] = useState(defaultSortOrder);
	const [categoryFilter, setCategoryFilter] = useState(null);
	const [priceRanges, setPriceRanges] = useState([]);

	const changeSortOrder = (e) => setSortOrder(e.target.value);
	const changeCategoryFilter = (e) => setCategoryFilter(e.target.value);
	const changeQuery = (e) => {
		setQuery(e.target.value);
		setPriceRanges(getPriceRanges(filterItems(items, e.target.value)));
	};
	const clearQuery = (e) => {
		setQuery("");
		setPriceRanges(getPriceRanges(filterItems(items, "")));
	};

	const closeEditFilter = () => setEditFilter(null);
	const editFilterChange = (filter) => setEditFilter(filter ? filter : null);

	const clearAllFilters = () => {
		setSortOrder(defaultSortOrder);
		setCategoryFilter(null);
		setPriceRanges(getPriceRanges(filterItems(items, query)));
		setEditFilter(null);
	};

	const focusSearch = () => {
		scrollToTop();
		searchEl.current.focus();
	};

	// Shopping cart link
	const navigate = useNavigate();
	const goToShoppingCart = () => navigate("/shoppingcart");

	const readyItems = () =>
		sortItems(
			filterItems(items, delayedQuery, categoryFilter, priceRanges),
			sortOrder
		);

	const itemAdded = (item) => {
		setItemsInCart(itemsInCart + 1);

		setNotifications([
			...notifications,
			{
				message: `${item.name} lisätty ostoskoriin.`,
				id: item._id,
			},
		]);
	};

	// Fetch items and set price ranges
	useEffect(() => {
		getAllItems().then((items) => {
			setItems(items);
			setPriceRanges(getPriceRanges(filterItems(items, query)));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
	}, [stickNav, showSearchIcon]);

	return (
		<StoreTemplate>
			<ShoppingCartContext.Provider value={{ itemsInCart, itemAdded }}>
				<NotificationBar
					onShowClick={goToShoppingCart}
					notifications={notifications}
					setNotifications={setNotifications}
				/>
				<Navigation
					isSticky={stickNav}
					showSearchIcon={showSearchIcon}
					searchIconOnClick={focusSearch}
				/>
				<SearchBar
					onClear={clearQuery}
					ref={searchEl}
					onChange={changeQuery}
					value={query}
				/>
				{delayedQuery && readyItems().length > 0 ? (
					<Summary>
						Näytetään hakutulokset haulle <b>"{delayedQuery}"</b>
					</Summary>
				) : delayedQuery ? (
					<NoResultsText>
						Ei hakutuloksia haulle <b>"{delayedQuery}"</b>
					</NoResultsText>
				) : (
					""
				)}
				{readyItems().length > 0 && (
					<FilterBar
						stickLower={stickNav}
						onChange={editFilterChange}
						onClear={clearAllFilters}
					/>
				)}
				{editFilter && (
					<>
						<BlackoutScreen />
						<FilterEdit>
							{editFilter === "order" ? (
								<OrderFilter
									onClose={closeEditFilter}
									onChange={changeSortOrder}
									onClear={clearAllFilters}
									checked={sortOrder}
								/>
							) : editFilter === "category" ? (
								<CategoryFilter
									items={items}
									onClose={closeEditFilter}
									onChange={changeCategoryFilter}
									onClear={clearAllFilters}
									checked={categoryFilter}
								/>
							) : editFilter === "price" ? (
								<PriceFilter
									onClose={closeEditFilter}
									onClear={clearAllFilters}
									priceRanges={priceRanges}
									setPriceRanges={setPriceRanges}
								/>
							) : (
								""
							)}
						</FilterEdit>
					</>
				)}
				<ItemsDisplay items={readyItems()} />
			</ShoppingCartContext.Provider>
		</StoreTemplate>
	);
};

export { StorePage };
