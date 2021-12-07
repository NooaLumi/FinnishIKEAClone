import React from "react";
import {SelectionBox} from "../molecules/SelectionBox";
import {CheckBox} from "../atoms/CheckBox";


const PriceFilter = ({onClose, onClear, priceRanges, setPriceRanges}) => {
	const priceRangeChange = (range) => {
		setPriceRanges(priceRanges.map(p => {
			if(p.min === range.min) {
				return {...p, active: !p.active};
			} else {
				return p;
			}
		}))
	}

	return (
		<SelectionBox onClose={onClose} selectionName="Hinta" onClear={onClear}>
			{priceRanges.map(priceRange => (
				<CheckBox 
					key={`${priceRange.min}${priceRange.max}`}
					name="Hinta" 
					displayValue={`${priceRange.min}€ - ${priceRange.max}€`} 
					value={`${priceRange.min}-${priceRange.max}`}
					checked={priceRange.active}
					onChange={e => priceRangeChange(priceRange)}
				/>
			))}
		</SelectionBox>
	)
}

export {PriceFilter}

