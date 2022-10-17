import React, { useState } from "react";
import { Wrapper } from "./BuilderEarlyChampions.style";
import EarlyChampionsBox from "../EarlyChampionsBox/EarlyChampionsBox";
import EarlyChampionsPicker from "../EarlyChampionsPicker/EarlyChampionsPicker";

function BuilderEarlyChampions() {
	const [counter2, setCounter] = useState(0);
	const [champs, setChamps] = useState([
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
		"TFT_TrainingDummy",
	]);

	const AddChamp = (id) => {
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
			<EarlyChampionsBox AddChamp={AddChamp} champs={champs} />
			<EarlyChampionsPicker
				champs={champs}
				changeCounter={(id) => changeCounter(id)}
				counter={counter2}
			/>
		</Wrapper>
	);
}

export default BuilderEarlyChampions;
