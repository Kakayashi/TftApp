import React, { useState } from "react";
import { Wrapper, Title } from "./TeamComps.style";
import Team from "../../molecules/Team/Team";

function TeamComps() {
	return (
		<>
			<Wrapper>
				<Title>Team Copms</Title>
				<Team
					titile="Jade Mystic"
					tier="S"
					strategy="fast 8"
					champions={[
						{ champion: "TFT5_Aatrox", position: 4 },
						{ champion: "TFT5_Akshan", position: 1 },
						{ champion: "TFT5_Aphelios", position: 11 },
						{ champion: "TFT5_Ashe", position: 13 },
						{ champion: "TFT5_Brand", position: 24 },
						{ champion: "TFT5_Diana", position: 6 },
						{ champion: "TFT5_Garen", position: 7 },
					]}
					earlyChampions={[
						"TFT5_Gragas",
						"TFT5_Gwen",
						"TFT5_Garen",
						"TFT5_Heimerdinger",
						"TFT5_Ivern",
					]}
					traits={[
						{ name: "Draconic", count: "5" },
						{ name: "Renewer", count: "4" },
						{ name: "Caretaker", count: "3" },
						{ name: "Invoker", count: "4" },
						{ name: "Ironclad", count: "1" },
					]}
					carousel={["1", "9", "19"]}
					options={[
						{ first: "lvl", second: "TFT5_Vladimir" },
						{ first: "TFT5_Viego", second: "TFT5_Yasuo" },
						{ first: "TFT5_Gragas", second: "TFT5_Garen" },
					]}
				/>

				<Team
					titile="Dragonmancers"
					tier="A"
					strategy="Slow Roll"
					champions={[
						{ champion: "TFT5_Zyra", position: 3 },
						{ champion: "TFT5_Ziggs", position: 4 },
						{ champion: "TFT5_Aphelios", position: 5 },
						{ champion: "TFT5_Volibear", position: 23 },
						{ champion: "TFT5_Velkoz", position: 24 },
						{ champion: "TFT5_Vayne", position: 25 },
						{ champion: "TFT5_Udyr", position: 26 },
					]}
					earlyChampions={[
						"TFT5_Tristana",
						"TFT5_Gwen",
						"TFT5_Thresh",
						"TFT5_Teemo",
						"TFT5_Syndra",
					]}
					traits={[
						{ name: "Sentinel", count: "5" },
						{ name: "Renewer", count: "4" },
						{ name: "Ironclad", count: "1" },
					]}
					carousel={["2", "3", "23"]}
					options={[
						{ first: "lvl", second: "TFT5_Riven" },
						{ first: "TFT5_Vayne", second: "TFT5_Rell" },
						{ first: "TFT5_Volibear", second: "TFT5_Pyke" },
					]}
				/>

				<Team
					titile="Dragonmancers"
					tier="C"
					strategy="Slow Roll"
					champions={[
						{ champion: "TFT5_Rakan", position: 3 },
						{ champion: "TFT5_Poppy", position: 4 },
						{ champion: "TFT5_Nunu", position: 5 },
						{ champion: "TFT5_Nocturne", position: 23 },
						{ champion: "TFT5_Nautilus", position: 24 },
						{ champion: "TFT5_Lux", position: 25 },
						{ champion: "TFT5_Lucian", position: 26 },
					]}
					earlyChampions={[
						"TFT5_Tristana",
						"TFT5_Gwen",
						"TFT5_Thresh",
						"TFT5_Teemo",
						"TFT5_Syndra",
					]}
					traits={[
						{ name: "Sentinel", count: "5" },
						{ name: "Renewer", count: "4" },
						{ name: "Ironclad", count: "1" },
					]}
					carousel={["2", "3", "23"]}
					options={[
						{ first: "lvl", second: "TFT5_Riven" },
						{ first: "TFT5_Vayne", second: "TFT5_Rell" },
						{ first: "TFT5_Volibear", second: "TFT5_Pyke" },
					]}
				/>
			</Wrapper>
			;
		</>
	);
}

export default TeamComps;
