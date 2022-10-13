import React from "react";
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
	}

	&::before {
		top: -30px;
		position: absolute;
		content: "Carousel:";
		font-size: 20px;
		font-weight: bold;
		@media (max-width: 1450px) {
			top: 0;
		}
	}
`;

export const Title = styled.p`
	font-size: 20px;
	font-weight: bold;
`;

function BuilderCarousel() {
	return (
		<Wrapper>
			<BuilderItemsCarousel />
			<CarouselSign />
			<BuilderItemsCarousel />
			<CarouselSign />
			<BuilderItemsCarousel />
		</Wrapper>
	);
}

export default BuilderCarousel;
