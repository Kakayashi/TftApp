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
		font-size: calc(16px + 2.5vw);
		width: 400px;
		@media (max-width: 1100px) {
			font-size: calc(32px + 2.5vw);
		}
		@media (max-width: 600px) {
			width: 200px;
			font-size: calc(16px + 4.5vw);
		}
		text-align: center;
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

const ModalText = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;

	p {
		margin-bottom: 4px;
		color: ${({ theme }) => theme.colors.orange};
	}

	&::after {
		position: absolute;
		width: 300px;
		height: 30px;
		content: "";
		background: url(${(props) => props.img});
		background-size: contain;
		background-repeat: no-repeat;
		left: 36%;
	}
`;

const WrapperModalText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ModalWrapperTriatItem = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 30%;
`;

const ModalTriatItemText = styled.span`
	font-size: 20px;
	width: 200px;
	text-align: left;
`;
const ModalTriatImg = styled.div`
	width: 100%;
	height: 30px;
	background: url(${(props) => props.img});
	background-size: contain;
	background-repeat: no-repeat;
`;

function ItemsDetail({ item }) {
	return (
		<div>
			<ModalNameWrapper>
				<ModalImg
					img={process.env.PUBLIC_URL + "champions/" + item.championId + ".png"}
				/>
				<span>{item.name}</span>
			</ModalNameWrapper>
			<WrapperModalText>
				<ModalText>
					<p> Cost:</p>
				</ModalText>
				<ModalText> {item.cost + " gold"}</ModalText>
				<ModalText>
					<p>Traits:</p>
				</ModalText>
				{item.traits.map((el) => {
					let string = el;
					let Newstring = "";
					let trigger = false;
					for (let i = 0; i < el.length - 1; i++) {
						string[i] === "_" && (trigger = true);
						if (trigger) Newstring += string[i + 1].toLowerCase();
					}

					return (
						<ModalWrapperTriatItem>
							<ModalTriatImg
								img={process.env.PUBLIC_URL + "traits/" + Newstring + ".png"}
							/>
							<ModalTriatItemText> {Newstring}</ModalTriatItemText>
						</ModalWrapperTriatItem>
					);
				})}
				<ModalText>{item.traits.map}</ModalText>
			</WrapperModalText>
		</div>
	);
}

export default ItemsDetail;
