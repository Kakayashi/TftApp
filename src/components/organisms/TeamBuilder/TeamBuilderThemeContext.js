import React, { useState, useContext, Children } from "react";
import Data from "../../../data/champions.json";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

const initialValue = [
	{
		name: "Aatrox",
		championId: "TFT5_Aatrox",
		cost: 1,
		traits: ["Set5_Redeemed", "Set5_Legionnaire"],
	},
];

export function TeamBuilderThemeContext({ children }) {
	const [team, setTeam] = useState(initialValue);
	const [traits, setTraits] = useState([]);
	const [tab, setTab] = useState([]);

	const AddTeam = (id) => {
		console.log("xd");
		const item = Data.find((el) => {
			return el.championId === id;
		});
		!team.find((el) => el === item) && setTeam([...team, item]);
	};

	const AddTab = () => {
		setTab([...tab, "xd"]);
		console.log("test", tab);
	};

	return (
		<ThemeContext.Provider value={team}>
			<ThemeUpdateContext.Provider value={AddTab}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
