import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("on search query change, items display changes", () => {
	render(<App />);
	screen.debug();
});
