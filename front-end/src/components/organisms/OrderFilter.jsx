import React from "react";
import {SelectionBox} from "../molecules/SelectionBox";
import {RadioButton} from "../atoms/RadioButton";

const OrderFilter = ({onClose, onChange, checked}) => {
	return(
		<SelectionBox onClose={onClose} selectionName="Järjestä">
			<RadioButton onChange={onChange} checked={checked === "name-desc"} name="Järjestä" displayValue="Nimi A-Ö" value="name-desc"/>
			<RadioButton onChange={onChange} checked={checked === "name-asc"} name="Järjestä" displayValue="Nimi Ö-A" value="name-asc"/>
			<RadioButton onChange={onChange} checked={checked === "price-asc"} name="Järjestä" displayValue="Edullisin Hinta" value="price-asc"/>
			<RadioButton onChange={onChange} checked={checked === "price-desc"} name="Järjestä" displayValue="Korkein Hinta" value="price-desc"/>
		</SelectionBox>
	);
}

export { OrderFilter };