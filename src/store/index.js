import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import Data from "../data/champions.json";

const initialValue = [
	{
		id: uuid(),
		name: "Aatrox",
		championId: "TFT5_Aatrox",
		cost: 1,
		traits: ["Set5_Redeemed", "Set5_Legionnaire"],
	},
];

const initialValue2 = [
	{
		id: uuid(),
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
	},
];
const teamSlice = createSlice({
	name: "team",
	initialState: initialValue,
	reducers: {
		addTeam(state, action) {
			let trigger = true;
			if (
				state.find((el) => {
					// console.log(
					// 	"el",
					// 	el.championId,
					// 	" == payload",
					// 	action.payload.championId,
					// 	"==",
					// 	action.payload.championId === el.championId
					// );
					if (action.payload.championId === el.championId) trigger = false;
				})
			)
				console.log("doublee", trigger);
			trigger &&
				state.push({
					id: uuid(),
					...action.payload,
				});
		},
		RemoveTeam(state, action) {
			return state.filter((el) => el.championId !== action.payload);
		},
		DeleteTeam(state, action) {
			return (state = []);
		},
	},
});

const teamCompSlice = createSlice({
	name: "teamComp",
	initialState: initialValue2,
	reducers: {
		addTeamComp(state, action) {
			let trigger = true;
			if (
				state.find((el) => {
					// console.log(
					// 	"el",
					// 	el.championId,
					// 	" == payload",
					// 	action.payload.championId,
					// 	"==",
					// 	action.payload.championId === el.championId
					// );
					if (action.payload.titile === el.titile) trigger = false;
				})
			)
				console.log("doublee", trigger);
			trigger &&
				state.push({
					id: uuid(),
					...action.payload,
				});
		},
		RemoveTeamComp(state, action) {
			return state.filter((el) => el.titile !== action.payload);
		},
		DeleteTeamComp(state, action) {
			return (state = []);
		},
	},
});

export const { addTeam, RemoveTeam, DeleteTeam } = teamSlice.actions;
export const { addTeamComp, RemoveTeamComp, DeleteTeamComp } =
	teamCompSlice.actions;

export const store = configureStore({
	reducer: {
		team: teamSlice.reducer,
		teamComp: teamCompSlice.reducer,
	},
});
