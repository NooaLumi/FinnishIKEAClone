import React from "react";
import {SelectionBox} from "../molecules/SelectionBox";
import {RadioButton} from "../atoms/RadioButton";

const CategoryFilter = ({onClose, onChange, checked}) => {
	return(
		<SelectionBox onClose={onClose} selectionName="Kategoria">
			<RadioButton onChange={onChange} name="Kategoria" checked={checked === "Chair"} displayValue="Tuoli" value="Chair"/>
			<RadioButton onChange={onChange} name="Kategoria" checked={checked === "Table"} displayValue="Pöytä" value="Table"/>
		</SelectionBox>
	);
}

export { CategoryFilter };