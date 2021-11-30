import React from "react";
import {getItemsCount} from "../API/ShoppingCart";


const ShoppingCartContext = React.createContext({
	itemCount: getItemsCount(),
	itemAdded: () => 0
});

export default ShoppingCartContext;