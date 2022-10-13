import React from "react";
import Data from "../../../data/champions.json";
import { Wrapper } from "./BuilderChampions.style";
import Item from "../../atoms/BuilderItem/Item";
import { v4 as uuid } from "uuid";

function BuilderChampions() {
	return (
		<Wrapper>
			{Data.map((el) => {
				return (
					<Item
						key={uuid()}
						url={process.env.PUBLIC_URL + "champions/" + el.championId + ".png"}
						name={el.name}
						id={el.championId}
					/>
				);
			})}
		</Wrapper>
	);
}

export default BuilderChampions;
