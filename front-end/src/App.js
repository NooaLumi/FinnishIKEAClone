import { Home } from "./pages/Home";
import {GlobalStyle} from "./components/GlobalStyle";
import theme from "./utils/theme";
import {ThemeProvider} from "styled-components";


function App() {
	return (
		<>
			<GlobalStyle/>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Home />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
