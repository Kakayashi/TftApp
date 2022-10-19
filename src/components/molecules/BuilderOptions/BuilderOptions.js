import React, { useState } from "react";
import { Wrapper } from "./BuilderOptions.style";
import EarlyChampionsBox from "../EarlyChampionsBox/EarlyChampionsBox";
import BuilderOption from "../BuilderOption/BuilderOption";

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
		console.log("champs", champs);
		x++;
		setCounter(x);
		setChamps(newCarousel);
		x >= 5 && setCounter(0);
	};

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
