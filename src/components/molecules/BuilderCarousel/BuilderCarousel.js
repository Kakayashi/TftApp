import React, { useEffect } from "react";
import BuilderItemsCarousel from "../../atoms/BuilderItemsCarousel/BuilderItemsCarousel";
import { CarouselSign } from "../../atoms/CarouselSign/CarouselSign";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	padding-block: 10px;
	transform: translateY(-10%);
	@media (max-width: 1450px) {
		padding-block: 30px;
		transform: translateY(0);
		flex-wrap: wrap;
	}
`;

const Item2 = styled.div`
	width: 60px;
	height: 60px;
	border: 2px solid black;
	margin: 20px;
	transform: translateY(-20%);
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;
`;

const Title = styled.p`
	top: -35px;
	position: absolute;
	font-size: 20px;
	font-weight: bold;
	@media (max-width: 1450px) {
		top: -20px;
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
		top: 3px;
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

function BuilderCarousel({ carousel, changeCounter, counter }) {
	return (
		<Wrapper onClick={() => console.log(carousel)}>
			{console.log("counter:", counter)}
			<Title>Carousel:</Title>
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
			</CounterWrapper>
			<BuilderItemsCarousel img={"/items/" + carousel[0] + ".png"} />
			<CarouselSign />
			<BuilderItemsCarousel
				img={process.env.PUBLIC_URL + "/items/" + carousel[1] + ".png"}
			/>
			<CarouselSign />
			<BuilderItemsCarousel
				img={process.env.PUBLIC_URL + "/items/" + carousel[2] + ".png"}
			/>
		</Wrapper>
	);
}

export default BuilderCarousel;
