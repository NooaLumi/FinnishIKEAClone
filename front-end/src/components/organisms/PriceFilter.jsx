import React from "react";
import { SelectionBox } from "../molecules/SelectionBox";
import { CheckBox } from "../atoms/CheckBox";
import styled from "styled-components";

const NoValuesMessage = styled.h2`
	text-align: center;
	font-size: 1.2rem;
	padding: 3rem 0;
`;

const PriceFilter = ({ onClose, onClear, priceRanges, setPriceRanges }) => {
	const priceRangeChange = (range) => {
		setPriceRanges(
			priceRanges.map((p) => {
				if (p.min === range.min) {
					return { ...p, active: !p.active };
				} else {
					return p;
				}
			})
		);
	};

	return (
		<SelectionBox onClose={onClose} selectionName="Hinta" onClear={onClear}>
			{priceRanges.length > 0 ? (
				priceRanges.map((priceRange) => (
					<CheckBox
						key={`${priceRange.min}${priceRange.max}`}
						name="Hinta"
						displayValue={`${priceRange.min}€ - ${priceRange.max}€`}
						value={`${priceRange.min}-${priceRange.max}`}
						checked={priceRange.active}
						onChange={(e) => priceRangeChange(priceRange)}
					/>
				))
			) : (
				<NoValuesMessage> Ei suodatettavia arvoja </NoValuesMessage>
			)}
		</SelectionBox>
	);
};

export { PriceFilter };
