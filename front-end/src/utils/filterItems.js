const searchWordFilter = (searchQuery, items) => {
	const searchWords = searchQuery.split(" ").map(i => i.toLowerCase());

	return items.filter(i => {
		return searchWords.reduce((pass, word) => {
			return i.name.toLowerCase().includes(word) ? pass : false;
		}, true);
	})
}

const categoryFilter = (category, items) => {
	return items.filter(i => i.type === category);
}

const priceFilter = (priceRanges, items) => {
	return items.filter(i => {
		return priceRanges.some(range => range.active ? (i.price >= range.min && i.price <= range.max) : false);
	})
}

const getPriceRanges = (items) => {
	const steps = [1, 10, 15, 20, 30, 50, 100, 200, 300, 500, 1000];
	const highest = items.reduce((max, i) => i.price > max ? i.price : max, 0);
	const step = steps.find(s => s * 2 > highest);
	const boxAmount = items.length < 5 ? items.length : 5;
	const forks = [];

	for(let i = 0; i < boxAmount; i++) {
		forks.push({min: i * step, max: (i + 1) * step, active: false});
	}

	return forks;
}

const filterItems = (items, searchQuery, category, priceRanges) => {
	let filteredItems = items;

	// Filter By Category
	filteredItems = category ? categoryFilter(category, filteredItems) : filteredItems;
	// Filter By Keyword
	filteredItems = searchQuery.length > 0 ? 
		searchWordFilter(searchQuery, filteredItems) : filteredItems;
	if(priceRanges.length > 0 && priceRanges.some(range => range.active)) {
		filteredItems = priceRanges.length > 0 ? priceFilter(priceRanges, filteredItems) : filteredItems;
	}

	return filteredItems;
}

export {filterItems, getPriceRanges};