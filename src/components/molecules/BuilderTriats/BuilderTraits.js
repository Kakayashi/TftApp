import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	Wrapper,
	Title,
	TeamInfoTraitIcon,
	TeamInfoTraitInfo,
	TeamInfoTraitNumber,
} from "./BuilderTraits.style";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteTeam } from "../../../store";

function BuilderTraits() {
	const [traits, setTraits] = useState([]);
	const team2 = useSelector((state) => state.team);
	let location = useLocation();
	const dispatch = useDispatch();

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
		let max = tab.length;
		for (let x = 0; x < max; x++) {
			for (let y = 0; y < max; y++) {
				if (x === y) continue;
				console.log(
					tab[y].count,
					">",
					tab[x].count,
					tab[y].count > tab[x].count
				);
				if (tab[y].count < tab[x].count) {
					let temp = tab[x];
					tab[x] = tab[y];
					tab[y] = temp;
				}
			}
		}
		setTraits(tab);

		console.log("now traits", traits);
		console.log("now team", team2);
	};

	useEffect(() => {
		console.log(location);
		dispatch(DeleteTeam());
	}, [location]);

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
