import React, { useEffect } from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { RemoveTeam } from "../../../store";
import {
	useThemeUpdate,
	useTheme,
} from "../../organisms/TeamBuilder/TeamBuilderThemeContext";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background: url(${(props) => props.img});
	background: ${(props) => (props.img ? `` : "orange")};

	background-size: contain;
	background-repeat: no-repeat;
	background-color: ${(props) => props.isOver && props.theme.colors.pink};
`;

function HexahonItem({ img, isOver, removeImage, name, position }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "image",
		item: { id: img, name: name },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	const dispatch = useDispatch();
	let context = useTheme();
	const updateTeam = useThemeUpdate();
	const removeContext = () => {
		let champs = context.champions;
		champs = champs.filter((el) => {
			return el.position !== position;
		});
		context.champions = champs;
		updateTeam(context);
		console.log("newChamps", champs);
	};

	useEffect(() => {
		isDragging && removeImage();
		isDragging && removeContext();
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
