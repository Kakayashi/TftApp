import React from "react";
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
`;

function BuilderItemsItem({ img }) {
	return <Item img={img} />;
}

export default BuilderItemsItem;
