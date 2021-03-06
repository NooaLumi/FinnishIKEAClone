import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--default-margin: 1.25rem;
		--margin: 1.25rem;
		--icon-size: 1.4rem;
		--nav-height: 60px;
		font-family: "Noto Sans", sans-serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: inherit;
	}
`;

export { GlobalStyle };
