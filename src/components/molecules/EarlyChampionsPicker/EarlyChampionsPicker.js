import React from "react";
import styled from "styled-components";
import BuilderItemsCarousel from "../../atoms/BuilderItemsCarousel/BuilderItemsCarousel";
import { CarouselSign } from "../../atoms/CarouselSign/CarouselSign";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	width: 450px;
	padding-block: 10px;
	transform: translateY(10%);
	@media (max-width: 1600px) {
		width: auto;
	}

	@media (max-width: 1450px) {
		padding-block: 40px;
		transform: translateY(0);
	}
	@media (max-width: 600px) {
		padding-top: 80px;
		transform: translateY(0);
	}
`;

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	top: -11px;
	right: 50px;
	@media (max-width: 1450px) {
		top: 15px;
	}
	@media (max-width: 600px) {
		left: 50%;
		transform: translateX(-50%);
		top: 45px;
	}
`;

const Title = styled.p`
	top: -35px;
	left: 50px;
	position: absolute;
	font-size: 20px;
	color: white;
	font-weight: bold;
	@media (max-width: 1450px) {
		top: -10px;
	}
	@media (max-width: 600px) {
		left: 50%;
		transform: translateX(-50%);
	}
`;

const CounterItem = styled.div`
	border: 2px solid
		${({ id, counter }) => (id === counter ? "white" : "rgba(7, 7, 7, 0.8)")};

	color: ${({ id, counter }) =>
		id === counter ? "white" : "rgba(7, 7, 7, 0.8)"};
	cursor: pointer;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: 2px;
	height: 20px;
	border-radius: 6px;
	text-align: center;
	${({ id, counter }) => console.log("id", id, " carousel: ", counter)};
`;

const WraperChampions = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

function EarlyChampionsPicker({ champs, changeCounter, counter }) {
	return (
		<Wrapper>
			<Title>Early champions:</Title>
			<CounterWrapper>
				<CounterItem
					id={0}
					counter={counter}
					onClick={(id) => changeCounter(0)}
				>
					1
				</CounterItem>
				<CounterItem
					id={1}
					counter={counter}
					onClick={(id) => changeCounter(1)}
				>
					2
				</CounterItem>
				<CounterItem
					id={2}
					counter={counter}
					onClick={(id) => changeCounter(2)}
				>
					3
				</CounterItem>
				<CounterItem
					id={3}
					counter={counter}
					onClick={(id) => changeCounter(3)}
				>
					4
				</CounterItem>
				<CounterItem
					id={4}
					counter={counter}
					onClick={(id) => changeCounter(4)}
				>
					5
				</CounterItem>
			</CounterWrapper>

			<WraperChampions>
				<BuilderItemsCarousel
					img={"/champions/" + champs[0] + ".png"}
					small={true}
				/>
				<CarouselSign />
				<BuilderItemsCarousel
					img={"/champions/" + champs[1] + ".png"}
					small={true}
				/>
				<CarouselSign />
				<BuilderItemsCarousel
					img={"/champions/" + champs[2] + ".png"}
					small={true}
				/>
				<CarouselSign />
				<BuilderItemsCarousel
					img={"/champions/" + champs[3] + ".png"}
					small={true}
				/>
				<CarouselSign />
				<BuilderItemsCarousel
					img={"/champions/" + champs[4] + ".png"}
					small={true}
				/>
			</WraperChampions>
		</Wrapper>
	);
}

export default EarlyChampionsPicker;
