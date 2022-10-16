import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
	width: 50px;
	height: 50px;
	border: 2px solid black;
	margin: 10px;
	background: url(${(props) => props.img});
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

function BuilderItemsItem({ AddCarousel, Itemid, img, picked }) {
	return (
		<Item onClick={(id) => AddCarousel(Itemid)} img={img} picked={picked} />
	);
}

export default BuilderItemsItem;
