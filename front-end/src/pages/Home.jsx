import "./Home.css";
import { Navigation } from "../components/Navigation";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import { useState, useEffect, useRef } from "react";

const navStickThreshold = 60;

const Home = () => {
	const prevScrollY = useRef(0);
	const searchEl = useRef(null);
	const [stickNav, setStickNav] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const navSearchOnClick = (e) => {
		searchEl.current.focus();
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Set search icon visibility
			if (currentScrollY > 60) {
				!showSearch && setShowSearch(true);
			} else {
				showSearch && setShowSearch(false);
			}

			// Make nav sticky when scrolling upwards
			if (prevScrollY.current < currentScrollY) {
				stickNav && setStickNav(false);
			} else if (currentScrollY > navStickThreshold) {
				!stickNav && setStickNav(true);
			}

			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [stickNav, showSearch]);

	return (
		<div className="home">
			<div className="home__navigation">
				<Navigation
					sticky={stickNav}
					showSearch={showSearch}
					searchOnClick={navSearchOnClick}
				/>
				<SearchBar ref={searchEl} />
			</div>
			<h2 className="search-summary">
				Näytetään hakutulokset haulle <b>"NULL"</b>
			</h2>
			<FilterBar stickLower={stickNav} />
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
				vitae, similique ipsum voluptate a error quia laborum tenetur
				quisquam tempora placeat fugit explicabo quas consequuntur
				aliquid veniam eos in nisi!
				<br />
			</p>
		</div>
	);
};

export { Home };
