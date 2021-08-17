import "./Navigation.css";
import { MdSearch, MdShoppingCart, MdMenu } from "react-icons/md";

const Navigation = ({ sticky, showSearch, searchOnClick }) => {
	return (
		<nav className={`nav ${sticky && "nav--sticky"}`}>
			<img src="/romu_logo.png" alt="ROMU logo" className="logo" />
			<div className="icons">
				{showSearch && <MdSearch onClick={searchOnClick} />}
				<MdShoppingCart />
				<MdMenu />
			</div>
		</nav>
	);
};
export { Navigation };
