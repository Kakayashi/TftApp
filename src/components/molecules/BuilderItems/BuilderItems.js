import React from "react";
import { Wrapper, ItemsWrapper } from "./BuilderItems.style";
import Data from "../../../data/items.json";
import BuilderItemsItem from "../../atoms/BuilderItemsItem/BuilderItemsItem";
import { v4 as uuid } from "uuid";
import BuilderCarousel from "../BuilderCarousel/BuilderCarousel";

function BuilderItems() {
	const newData = Data.filter((el) => el.id < 9);

	return (
		<Wrapper>
			<ItemsWrapper>
				{newData.map((el) => {
					return (
						<BuilderItemsItem
							key={uuid()}
							img={process.env.PUBLIC_URL + "/items/" + el.id + ".png"}
						/>
					);
				})}
			</ItemsWrapper>
			<BuilderCarousel />
		</Wrapper>
	);
}

export default BuilderItems;
