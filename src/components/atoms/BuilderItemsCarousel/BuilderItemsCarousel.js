import React, { useEffect, useState } from "react";
import styled from "styled-components";
/////* background: url(${(props) => props.img ? props.img : process.env.PUBLIC_UR+ "/champions/TFT_TrainingDummy.png`}); */
const Item = styled.div`
	width: 60px;
	height: 60px;
	border: 2px solid black;
	margin: 20px;
	transform: translateY(-20%);
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;

	${({ small }) => small && "margin-inline: 20px;"}
`;

function BuilderItemsCarousel({ img, small }) {
	return <Item img={img} small={small} />;
}

export default BuilderItemsCarousel;
