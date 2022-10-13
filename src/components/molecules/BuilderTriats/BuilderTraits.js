import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	Wrapper,
	Title,
	TeamInfoTraitIcon,
	TeamInfoTraitInfo,
	TeamInfoTraitNumber,
} from "./BuilderTraits.style";

function BuilderTraits() {
	const [traits, setTraits] = useState([]);
	const team2 = useSelector((state) => state.team);

	const FindTriats = () => {
		let tab = [];
		team2.forEach((el) => {
			el.traits.forEach((element) => {
				tab.find((tabEl) => {
					return tabEl.name === element;
				})
					? tab.forEach((tabEl) => {
							tabEl.name === element && tabEl.count++;
					  })
					: tab.push({ name: element, count: 1 });
			});
		});
		setTraits(tab);
		SortTriats();
		console.log("now traits", traits);
		console.log("now team", team2);
	};

	const SortTriats = () => {
		let max = traits.length;
		for (let x = 0; x < max; x++) {
			for (let y = 0; y < max; y++) {
				if (x === y) continue;
				console.log(
					traits[y],
					">",
					traits[x],
					traits[y].count > traits[x].count
				);
				if (traits[y].count > traits[x].count) {
					let temp = traits[x];
					traits[x] = traits[y];
					traits[y] = temp;
				}
			}
		}
	};

	useEffect(() => {
		FindTriats();
	}, [team2]);

	return (
		<Wrapper>
			<Title>Traits:</Title>

			{traits.map((el) => {
				let string = el.name;
				let Newstring = "";
				let trigger = false;
				for (let i = 0; i < string.length - 1; i++) {
					string[i] === "_" && (trigger = true);
					if (trigger) Newstring += string[i + 1].toLowerCase();
				}

				return (
					<TeamInfoTraitInfo key={"BuilderTriat" + el.name}>
						<TeamInfoTraitIcon
							img={process.env.PUBLIC_URL + "traits/" + Newstring + ".png"}
						></TeamInfoTraitIcon>
						<TeamInfoTraitNumber number={el.count}></TeamInfoTraitNumber>
					</TeamInfoTraitInfo>
				);
			})}
		</Wrapper>
	);
}

export default BuilderTraits;
