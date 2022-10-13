import React, { useEffect } from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { RemoveTeam } from "../../../store";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: url(${(props) => props.img});
	background: ${(props) => (props.img ? `` : "orange")};

	background-size: contain;
	background-repeat: no-repeat;
	background-color: ${(props) => props.isOver && props.theme.colors.pink};
`;

function HexahonItem({ img, isOver, removeImage, name }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: img, name: name },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		isDragging && removeImage();
		isDragging && dispatch(RemoveTeam(name));
	}, [isDragging]);

	return (
		<Wrapper
			ref={drag}
			img={process.env.PUBLIC_URL + img}
			isOver={isOver}
		></Wrapper>
	);
}

export default HexahonItem;
