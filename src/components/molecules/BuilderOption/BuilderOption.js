import React from "react";
import { Wrapper, Title, OptionWrapper, Lvl } from "./BuilderOption.style";
import { CarouselSign } from "../../atoms/CarouselSign/CarouselSign";
import BuilderItemsCarousel from "../../atoms/BuilderItemsCarousel/BuilderItemsCarousel";
import BuilderOprionsPicker from "../BuilderOptionsPicker/BuilderOprionsPicker";

function BuilderOption({ champs, changeCounter, counter }) {
	return (
		<Wrapper>
			<BuilderOprionsPicker
				counter={counter}
				changeCounter={(id) => changeCounter(id)}
			/>
			<OptionWrapper>
				<Lvl />
				<CarouselSign />
				<BuilderItemsCarousel img={"/champions/" + champs[0] + ".png"} />
			</OptionWrapper>
			<OptionWrapper>
				<BuilderItemsCarousel img={"/champions/" + champs[1] + ".png"} />
				<CarouselSign />
				<BuilderItemsCarousel img={"/champions/" + champs[2] + ".png"} />
			</OptionWrapper>
			<OptionWrapper>
				<BuilderItemsCarousel img={"/champions/" + champs[3] + ".png"} />
				<CarouselSign />
				<BuilderItemsCarousel img={"/champions/" + champs[4] + ".png"} />
			</OptionWrapper>
		</Wrapper>
	);
}

export default BuilderOption;
