import React from "react";
import { getItemsCount } from "../API/ShoppingCart";

const ShoppingCartContext = React.createContext({
	itemsInCart: getItemsCount(),
	itemAdded: () => 0,
	itemsUpdate: () => 0,
});

export default ShoppingCartContext;
