import React, { useState } from "react";
import Data from "../../../data/items.json";
import {
	WrapperItem,
	Item,
	PlusSign,
	EqualSign,
	AllWrapperItems,
	Search,
	Wrapper2,
} from "./CraftingIrem.style";

function CraftingItem({ handleOpenItemModal }) {
	let items = [];
	const [search, setSearch] = useState({ name: "" });
	const handleChange = (e) => {
		let newValue = e.target.value;
		setSearch({ ...search, name: newValue });
	};
	//console.log(Data);
	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			let k = i + "" + j;
			k = parseInt(k);
			let x = i + "" + i;
			if (x > k) continue;
			const foundk = Data.find((el) => el.id === k);
			const foundi = Data.find((el) => el.id === i);
			const foundj = Data.find((el) => el.id === j);

			foundk.name.toLocaleLowerCase().includes(search.name) &&
				items.push(
					<WrapperItem key={k + "WraperItem"}>
						<Item
							key={k + "WraperItem1"}
							onClick={() => handleOpenItemModal(foundi)}
							img={process.env.PUBLIC_URL + "/items/" + i + ".png"}
						/>
						<PlusSign />
						<Item
							key={i + "WraperItem2"}
							onClick={() => handleOpenItemModal(foundj)}
							img={process.env.PUBLIC_URL + "/items/" + j + ".png"}
						/>
						<EqualSign />
						<Item
							key={j + "WraperItem3"}
							onClick={() => handleOpenItemModal(foundk)}
							img={process.env.PUBLIC_URL + "/items/" + k + ".png"}
							name={foundk.name}
						/>
					</WrapperItem>
				);
		}
	}

	return (
		<Wrapper2>
			<Search type="text" onChange={(e) => handleChange(e)} />
			<AllWrapperItems>{items}</AllWrapperItems>
		</Wrapper2>
	);
}

export default CraftingItem;
