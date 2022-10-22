import React, { useState, useEffect } from "react";
import { Wrapper } from "./BuilderOptions.style";
import EarlyChampionsBox from "../EarlyChampionsBox/EarlyChampionsBox";
import BuilderOption from "../BuilderOption/BuilderOption";
import {
	useThemeUpdate,
	useTheme,
} from "../../organisms/TeamBuilder/TeamBuilderThemeContext";

function BuilderOptions() {
	const [counter2, setCounter] = useState(0);
	const [champs, setChamps] = useState([
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
	]);
	const AddOption = (id) => {
		let newCarousel = [...champs];
		let x = counter2;
		newCarousel[x] = id;
		//console.log(x);
		//console.log("champs", champs);
		x++;
		setCounter(x);
		setChamps(newCarousel);
		x >= 5 && setCounter(0);
	};

	let newContext = useTheme();
	const updateContext = useThemeUpdate();

	useEffect(() => {
		let newOptions = [
			{ first: "lvl", second: champs[0] },
			{ first: champs[1], second: champs[2] },
			{ first: champs[3], second: champs[4] },
		];
		newContext.options = newOptions;
		updateContext(newContext);
	}, [champs]);

	const changeCounter = (id) => setCounter(id);

	return (
		<Wrapper>
			<EarlyChampionsBox
				AddChamp={(id) => AddOption(id)}
				champs={champs}
				second={true}
			/>
			<BuilderOption
				champs={champs}
				changeCounter={(id) => changeCounter(id)}
				counter={counter2}
			/>
		</Wrapper>
	);
}

export default BuilderOptions;
