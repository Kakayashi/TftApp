import React, { useState } from "react";
import { Wrapper, ItemsWrapper } from "./BuilderItems.style";
import Data from "../../../data/items.json";
import BuilderItemsItem from "../../atoms/BuilderItemsItem/BuilderItemsItem";
import { v4 as uuid } from "uuid";
import BuilderCarousel from "../BuilderCarousel/BuilderCarousel";

function BuilderItems() {
	const [counter, setCounter] = useState(0);
	const [carousel, setCarousel] = useState(["8", "8", "8"]);
	const newData = Data.filter((el) => el.id < 9);

	const AddCarousel = (id) => {
		let newCarousel = [...carousel];
		let x = counter;
		newCarousel[x] = id;
		//console.log(x);
		console.log(carousel);
		x++;
		setCounter(x);
		setCarousel(newCarousel);
		x >= 3 && setCounter(0);
	};

	const changeCounter = (id) => setCounter(id);

	return (
		<Wrapper>
			<ItemsWrapper>
				{newData.map((el) => {
					let picked = [];
					for (let i = 0; i < 3; i++) {
						if (el.id === carousel[i]) picked.push(i + 1);
					}
					//console.log(picked);
					return (
						<BuilderItemsItem
							AddCarousel={AddCarousel}
							Itemid={el.id}
							key={uuid()}
							img={process.env.PUBLIC_URL + "/items/" + el.id + ".png"}
							picked={picked}
						/>
					);
				})}
			</ItemsWrapper>
			<BuilderCarousel
				carousel={carousel}
				changeCounter={(id) => changeCounter(id)}
				counter={counter}
			/>
		</Wrapper>
	);
}

export default BuilderItems;
