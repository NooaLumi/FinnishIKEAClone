const DevConsole = () => {
	return(
		<form method="post" action="/api/items">
			<label htmlFor ="name">
				Name:
				<input type="text" id="name" name="name"/>
			</label>
			<label htmlFor="type">
				Type:
				<input type="text" id="type" name="type"/>
			</label>
			<label htmlFor="price">
				Price:
				<input type="number" step={0.01} id="price" name="price"/>
			</label>
			<label htmlFor="image">
				Image url:
				<input type="text" id="image" name="image"/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
export { DevConsole };