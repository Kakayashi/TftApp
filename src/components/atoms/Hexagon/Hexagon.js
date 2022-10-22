import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import HexahonItem from "./HexahonItem";
import {
	useThemeUpdate,
	useTheme,
} from "../../organisms/TeamBuilder/TeamBuilderThemeContext";
import { useDispatch, useSelector } from "react-redux";

const Hexagon2 = styled.div`
	height: 100px;
	width: 100px;
	background: ${({ theme }) => theme.colors.orange};
	-webkit-clip-path: polygon(
		50% 0%,
		95% 25%,
		95% 75%,
		50% 100%,
		5% 75%,
		5% 25%
	);

	clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
	margin-top: -14px;

	@media (max-width: 1000px) {
		height: 70px;
		width: 70px;
	}

	@media (max-width: 700px) {
		height: 45px;
		width: 45px;
		margin-top: -6px;
	}
	@media (max-width: 424px) {
		height: 32px;
		width: 32px;
		margin-top: -2px;
	}
	background-color: ${(props) => props.isOver && props.theme.colors.pink};
`;

function Hexagon({ AddTeam, position }) {
	const [board, setBoard] = useState(false);
	const [hexagonName, setHexagonName] = useState("");
	const updateContext = useThemeUpdate();
	let context = useTheme();
	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: "image",
		drop: (item) => addImageToBoard(item),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: !!monitor.canDrop(),
		}),
	}));

	const addImageToBoard = (item) => {
		setBoard(item.id);
		AddTeam(item.name);
		setHexagonName(item.name);
		//let oldChamps = context.champions;
		//console.log("przed", oldChamps);
		let newChamp = { champion: item.name, position };
		context.champions.push(newChamp);
		console.log("po", context.champions);
		updateContext(context);

		//updateTeam(item.name);
		// console.log("id", item.id);
		// console.log("name", item.name);
		//if (isOver === true && canDrop === true) setBoard(id);
	};

	const removeImage = () => setBoard(false);

	// useEffect(() => {
	// 	console.log("options: ", board);
	// }, [board]);

	return (
		<>
			<Hexagon2 ref={drop} isOver={isOver}>
				{board ? (
					<HexahonItem
						img={board}
						position={position}
						isOver={isOver}
						removeImage={() => removeImage()}
						name={hexagonName}
					/>
				) : null}
			</Hexagon2>
		</>
	);
}

export default Hexagon;
