import "./SearchBar.css";
import { MdSearch, MdClose, MdCancel } from "react-icons/md";
import React, { useState } from "react";

const SearchBar = React.forwardRef((props, ref) => {
	const [isActive, setActive] = useState(false);

	return (
		<div className="search">
			{isActive ? (
				<MdClose className="search__icon" />
			) : (
				<MdSearch
					className="search__icon"
					onClick={(e) => ref.current.focus()}
				/>
			)}
			<input
				className="search__input"
				type="text"
				placeholder="Mitä etsit?"
				onFocus={(e) => setActive(true)}
				onBlur={(e) => setActive(false)}
				ref={ref}
			/>
			{isActive && (
				<div className="control-icons">
					<MdCancel className="control-icons__icon control-icons__icon--cancel" />
					<div className="control-icons__div"></div>
					<MdSearch className="control-icons__icon control-icons__icon--search" />
				</div>
			)}
		</div>
	);
});

export { SearchBar };
