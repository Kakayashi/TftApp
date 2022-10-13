import React, { useState } from "react";
import { Wrapper } from "../../atoms/Wrapper/Wrapper";
import styled from "styled-components";
import Data from "../../../data/items.json";
import useModal from "../Modal/useModal";
import Modal from "../Modal/Modal";
import ItemsDetail from "../../molecules/ItemsDetail/ItemsDetail";
import CraftingItem from "../../molecules/CraftingItem/CraftingItem";

const Title = styled.h2`
	color: white;
	position: absolute;
	top: -15px;
	font-size: 40px;
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
	margin: 20px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;
`;

function Items() {
	const [currentItem, setCurrentItem] = useState({
		id: "",
		name: "",
		description: "",
		isUnique: "",
		isElusive: "",
		isRadiant: "",
	});
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();
	const handleOpenItemModal = (id) => {
		setCurrentItem(id);
		console.log(currentItem);
		handleOpenModal();
	};

	return (
		<>
			<Wrapper>
				<Title>Items</Title>
				{Data.map((el) => {
					return (
						<ItemWrapper key={el.name + "Wrapper"}>
							<Item
								key={el.name + "Item"}
								img={process.env.PUBLIC_URL + "/items/" + el.id + ".png"}
								name={el.name}
								onClick={() => handleOpenItemModal(el)}
							/>
							<ItemName key={el.championId + "Name"}> {el.name} </ItemName>
						</ItemWrapper>
					);
				})}

				{isOpen ? (
					<Modal handleClose={handleCloseModal}>
						<ItemsDetail item={currentItem}></ItemsDetail>
					</Modal>
				) : null}
			</Wrapper>
			<Wrapper>
				<Title>Crafting</Title>
				<CraftingItem handleOpenItemModal={handleOpenItemModal}></CraftingItem>
			</Wrapper>
		</>
	);
}

export default Items;
