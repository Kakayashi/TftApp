import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Data from "../../../data/champions.json";

const Box = styled.div`
	height: 300px;
	width: 800px;
	border: 2px solid ${({ theme }) => theme.colors.black};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	overflow: auto;
	scrollbar-color: red black;
	position: relative;
	&::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	@media (max-width: 1000px) {
		width: 500px;
	}
	@media (max-width: 650px) {
		width: 300px;
	}
`;

const Item = styled.div`
	width: 50px;
	height: 50px;
	border: 2px solid black;
	margin: 10px;
	background: url(${(props) => props.url});
	background-size: contain;
	position: relative;
	cursor: pointer;
	${({ picked }) =>
		picked.length !== 0 ? "border: 3px solid orange;" : "padding:1px;"}

	&::after {
		position: absolute;
		font-size: 14px;
		content: "${({ picked }) => picked + " "}";
		bottom: -13px;
		left: 50%;
		transform: translateX(-50%);
		background-color: orange;
		padding-inline: 5px;
		border-radius: 5px;
		text-align: center;
	}
`;

const Search = styled.input`
	position: absolute;
	top: -50px;
	left: 25%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.colors.transparent2};
	color: white;
	padding: 10px 12px;
	border: 2px solid ${({ theme }) => theme.colors.black};
	box-sizing: border-box;
	width: 200px;
	margin-inline: auto;
	text-align: center;
	border-radius: 15px;
	font-size: ${({ theme }) => theme.fontSize.l};
	&:focus {
		outline: none;
		border: 2px solid orange;
	}
	@media (max-width: 1450px) {
		left: 50%;
		transform: translateX(-50%);
	}
`;

function EarlyChampionsBox({ AddChamp, champs }) {
	const [search, setSearch] = useState({ name: "" });
	const handleChange = (e) => {
		let newValue = e.target.value;
		setSearch({ ...search, name: newValue });
	};
	return (
		<>
			<Search type="text" onChange={(e) => handleChange(e)} />
			<Box>
				{Data.map((el) => {
					let picked = [];
					for (let i = 0; i < 5; i++) {
						if (el.championId === champs[i]) picked.push(i + 1);
					}

					if (el.name.toLocaleLowerCase().includes(search.name))
						return (
							<Item
								onClick={() => AddChamp(el.championId)}
								key={uuid()}
								url={
									process.env.PUBLIC_URL + "champions/" + el.championId + ".png"
								}
								name={el.name}
								id={el.championId}
								picked={picked}
							/>
						);
				})}
			</Box>
		</>
	);
}

export default EarlyChampionsBox;
