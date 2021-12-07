import { StorePage } from "./pages/StorePage";
import {GlobalStyle} from "./components/GlobalStyle";
import theme from "./utils/theme";
import {ThemeProvider} from "styled-components";

function App() {
	return (
		<>
			<GlobalStyle/>
			<ThemeProvider theme={theme}>
					<StorePage/>
			</ThemeProvider>
		</>
	);
}

export default App;
