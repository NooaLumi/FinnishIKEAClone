const sortItems = (items, order) => {
	switch(order) {
		case "name-desc":
			return items.sort((a, b) => a.name > b.name);
		case "name-asc":
			return items.sort((a, b) => a.name < b.name);
		case "price-desc":
			return items.sort((a, b) => a.price > b.price);
		case "price-asc":
			return items.sort((a, b) => a.price < b.price);
		default:
			console.log("No sort applied")
			return items;
	}
}

export {sortItems};