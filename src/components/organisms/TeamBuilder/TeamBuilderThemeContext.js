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
	titile: "Jade Mystic",
	tier: "S",
	strategy: "fast 8",
	champions: [
		{ champion: "TFT5_Aatrox", position: 4 },
		{ champion: "TFT5_Akshan", position: 1 },
		{ champion: "TFT5_Aphelios", position: 11 },
		{ champion: "TFT5_Ashe", position: 13 },
		{ champion: "TFT5_Brand", position: 24 },
		{ champion: "TFT5_Diana", position: 6 },
		{ champion: "TFT5_Garen", position: 7 },
	],
	earlyChampions: [
		"TFT5_Gragas",
		"TFT5_Gwen",
		"TFT5_Garen",
		"TFT5_Heimerdinger",
		"TFT5_Ivern",
	],
	traits: [
		{ name: "Draconic", count: "5" },
		{ name: "Renewer", count: "4" },
		{ name: "Caretaker", count: "3" },
		{ name: "Invoker", count: "4" },
		{ name: "Ironclad", count: "1" },
	],
	carousel: ["1", "9", "19"],
	options: [
		{ first: "lvl", second: "TFT5_Vladimir" },
		{ first: "TFT5_Viego", second: "TFT5_Yasuo" },
		{ first: "TFT5_Gragas", second: "TFT5_Garen" },
	],
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
