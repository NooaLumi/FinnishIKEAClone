import React from "react"
import "./ItemsDisplay.css";
import {MdAddShoppingCart } from "react-icons/md";

const ItemsDisplay = ({ items }) => {
	return(
			<div data-testid="items-display" className="items-display">{items.map(item => (
				<div className="items-display__item" key={item._id}> 
					<img className="items-display__item-image" src={"/images/" + item.image} alt={item.name}/>
					<h3 className="items-display__item-name"> {item.name} </h3>
					<p className="items-display__item-details">{item.type}</p>
					<p className="items-display__item-price">{item.price.toLocaleString("en", {minimumFractionDigits: 2})}€</p>
					<MdAddShoppingCart className="items-display__item-add-button"/>
				</div>
			))}</div>
	);
}
export { ItemsDisplay };