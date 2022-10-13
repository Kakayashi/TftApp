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

export const { addTeam, RemoveTeam, DeleteTeam } = teamSlice.actions;

export const store = configureStore({
	reducer: {
		team: teamSlice.reducer,
	},
});
