
const getItems = () => {
	const items = JSON.parse(localStorage.getItem("shoppingCart"));
	return items ? items : [];
}

const getTotalPrice = () => {
	let total = 0;
	getItems().map(i => {
		for(let x = 0; x < i.amountInCart; x++) {
			total += i.price;	
		}
	})
	return total;
}

const getItemsCount = () => {
	const items = getItems();
	return items.reduce((total, i) => total + i.amountInCart, 0);
}

const addItem = (item) => {
	const items = getItems();
	// Add one if instance exists
	if(items.some(i => i._id === item._id)) {
		items.find(i => i._id === item._id).amountInCart += 1;
	} else {
		// Else create instance
		items.push({...item, amountInCart: 1});
	}
	localStorage.setItem("shoppingCart", JSON.stringify(items));
	return getItems();
}

const removeItem = (item) => {
	const items = getItems().filter(i => i._id !== item._id);
	localStorage.setItem("shoppingCart", JSON.stringify(items));
	return getItems();
}

const subtractItem = (item) => {
	let items = getItems();
	if(items.some(i => i._id === item._id)) {
		// Remove item if there's only one in cart
		if(items.find(i => i._id === item._id).amountInCart === 1) {
			items = items.filter(i => i._id !== item._id);
		} else {
			// Subtract one from cart
			items.find(i => i._id === item._id).amountInCart -= 1;
		}
	} 
	localStorage.setItem("shoppingCart", JSON.stringify(items));
	return getItems();
}

const clearItems = () => {
	localStorage.removeItem("shoppingCart");
	return 0;
}


export {getItems, addItem, subtractItem, removeItem, clearItems, getItemsCount, getTotalPrice}
