import React, { useState, useContext, Children, useMemo } from "react";
import Data from "../../../data/champions.json";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

const initialValue = {
	titile: "",
	strategy: "",
	champions: [],
	earlyChampions: [],
	traits: [],
	carousel: [],
	options: [],
};

export function TeamBuilderThemeContext({ children }) {
	const [team, setTeam] = useState(initialValue);

	const value = useMemo(() => ({ team, setTeam }), [team, setTeam]);

	return (
		<ThemeContext.Provider value={team}>
			<ThemeUpdateContext.Provider value={setTeam}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
