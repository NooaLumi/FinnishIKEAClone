async function getAllItems() {
	try {
		const res = await fetch("/api/items");
		const json = await res.json();
		const data = await JSON.parse(json);

		return data;
	} catch(err) {
		console.log("Error: Failed to fetch items");
		console.log(err);

		return null;
	}

}

export {getAllItems}