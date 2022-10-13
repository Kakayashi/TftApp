import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const Item2 = styled.div`
	width: 50px;
	height: 50px;
	border: 2px solid black;
	margin: 10px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;
	cursor: pointer;
`;

function Item(props) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: props.url, name: props.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<Item2
			ref={drag}
			img={process.env.PUBLIC_URL + props.url}
			isDragging={isDragging}
		/>
	);
}

export default Item;
