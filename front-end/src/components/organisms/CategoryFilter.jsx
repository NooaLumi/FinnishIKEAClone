import React from "react";
import {SelectionBox} from "../molecules/SelectionBox";
import {RadioButton} from "../atoms/RadioButton";

const CategoryFilter = ({items, onClose, onClear, onChange, checked}) => {
	const getCategories = () => {
		let categories = [];
		items.map(i => {
			if(categories.find(c => c === i.type)) {
				return 0;	
			} else {
				categories.push(i.type);
			}
			return 0;
		})
		return categories;
	}

	return(
		<SelectionBox onClose={onClose} onClear={onClear} selectionName="Kategoria">
			{getCategories().map(c => (
				<RadioButton key={c} onChange={onChange} name="Kategoria" checked={checked === c} displayValue={c} value={c}/>
			))}
		</SelectionBox>
	);
}

export { CategoryFilter };