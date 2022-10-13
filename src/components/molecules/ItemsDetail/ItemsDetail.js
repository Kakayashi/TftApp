import React from "react";
import styled from "styled-components";

const ModalNameWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-evenly;
	padding: 40px 0;
	position: relative;

	span {
		max-width: 20vw;
		text-align: center;
		font-size: calc(16px + 2.5vw);
	}
`;

const ModalImg = styled.div`
	width: 100px;
	height: 100px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: absolute;
	left: 40px;
	top: 30px;

	@media (max-width: 600px) {
		width: 70px;
		height: 70px;
		left: 70px;
	}
`;

const DescriptionWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	margin-inline: auto;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 30px;
	font-size: 20px;
	&::before {
		color: ${({ theme }) => theme.colors.orange};
		content: "description:";
		position: absolute;
		top: -30px;
	}
`;

const IsSomething = styled.div`
	position: relative;
	font-size: 20px;
	padding-left: 55%;
	height: 40px;
	&::after {
		content: "${(props) => props.name}";
		color: ${({ theme }) => theme.colors.orange};
		position: absolute;
		left: 36%;
		@media (max-width: 600px) {
			left: 26%;
		}
	}
`;

function ItemsDetail({ item }) {
	return (
		<div>
			<ModalNameWrapper>
				<ModalImg img={process.env.PUBLIC_URL + "/items/" + item.id + ".png"} />
				<span>{item.name}</span>
			</ModalNameWrapper>
			<DescriptionWrapper>{item.description}</DescriptionWrapper>
			<IsSomething name="Is Unique:">
				{item.isUnique ? "true" : "false"}
			</IsSomething>
			<IsSomething name="Is Elusive:">
				{item.isElusive ? "true" : "false"}
			</IsSomething>
			<IsSomething name="Is radiant:">
				{item.isRadiant ? "true" : "false"}
			</IsSomething>
		</div>
	);
}

export default ItemsDetail;
