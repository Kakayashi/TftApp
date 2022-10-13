import React, { useState } from "react";
import Data from "../../../data/champions.json";
import styled from "styled-components";
import useModal from "../Modal/useModal";
import Modal from "../Modal/Modal";
import ChampionDetail from "../../molecules/ChampionDetail/ChampionDetail";

const Wrapper = styled.div`
	width: 80%;
	height: auto;
	background-color: ${({ theme }) => theme.colors.black};
	margin-inline: auto;
	margin-top: 10vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px 0;
	border-radius: 20px;
	position: relative;
	padding-top: 80px;
`;

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	color: white;
	&:hover {
		color: ${({ theme }) => theme.colors.orange};
	}
`;

const ItemName = styled.span`
	text-align: center;

	font-size: 10px;
`;

const Item = styled.div`
	width: 80px;
	height: 80px;
	border: 2px solid black;
	margin: 10px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;
`;

const Title = styled.h2`
	color: white;
	position: absolute;
	top: -15px;
	font-size: 40px;
`;

function Champions() {
	const [currentChampion, setCurrentChampion] = useState({
		name: "",
		championId: "",
		cost: "",
		triat: "",
	});
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();
	const handleOpenChampionModal = (id) => {
		setCurrentChampion(id);
		handleOpenModal();
	};

	return (
		<Wrapper>
			<Title>Champions</Title>

			{Data.map((el) => {
				return (
					<ItemWrapper key={el.championId + "Wrapper"}>
						<Item
							key={el.championId + "Item"}
							img={
								process.env.PUBLIC_URL + "champions/" + el.championId + ".png"
							}
							name={el.name}
							onClick={() => handleOpenChampionModal(el)}
						/>
						<ItemName key={el.championId + "Name"}> {el.name} </ItemName>
					</ItemWrapper>
				);
			})}
			{isOpen ? (
				<Modal handleClose={handleCloseModal}>
					<ChampionDetail item={currentChampion}></ChampionDetail>
				</Modal>
			) : null}
		</Wrapper>
	);
}

export default Champions;
