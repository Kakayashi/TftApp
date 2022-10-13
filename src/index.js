import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./views/Root";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<Root />
			</React.StrictMode>
		</ThemeProvider>
	</Provider>
);
