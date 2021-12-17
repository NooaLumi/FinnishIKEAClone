import { StorePage } from "./pages/StorePage";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";

import { GlobalStyle } from "./components/GlobalStyle";
import theme from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/store" element={<StorePage />} />
					<Route path="/shoppingcart" element={<CartPage />} />
				</Routes>
			</ThemeProvider>
		</Router>
	);
}

export default App;
