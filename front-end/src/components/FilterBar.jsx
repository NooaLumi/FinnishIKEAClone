import "./FilterBar.css";
import { MdTune } from "react-icons/md";

const FilterBar = ({ stickLower }) => {
	return (
		<div
			className={`filter-bar ${stickLower && "filter-bar--stick-lower"}`}
		>
			<button className="filter-bar__button"> Järjestä </button>
			<button className="filter-bar__button"> Kategoria </button>
			<button className="filter-bar__button"> Hinta </button>
			<button className="filter-bar__button">
				Kaikki suodattimet <MdTune />
			</button>
		</div>
	);
};

export { FilterBar };
