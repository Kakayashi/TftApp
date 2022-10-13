import React, { useState } from "react";
import {
	Team,
	TeamName,
	TeamChampion,
	TeamButton,
	TeamNameTier,
	TeamNameFild,
	TeamNameFildName,
	TeamNameFildCategory,
	Hero,
	TeamInfo,
	TeamInfoEarly,
	TeamInfoTraits,
	TeamInfoCarousel,
	TeamInfoOption,
	TeamInfoPosition,
	TeamInfoGrid,
	TeamInfoInfo,
	TeamInfoInfoName,
	TeamInfoEarlyChampion,
	TeamInfoEarlyChamps,
	TeamInfoTraitIcon,
	TeamInfoTraitInfo,
	TeamInfoTraitNumber,
	TeamInfoCarouselSign,
	TeamInfoTraitsWrapper,
	TeamInfoEarlyLvl,
} from "./Team.style";
import GameFild from "../GameFild/GameFild";

function Team2(props) {
	const [isOpen, setIsOpen] = useState(false);
	let numberSign = 0;
	const addSign = () => numberSign++;
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Team>
				<TeamName>
					<TeamNameTier tier={props.tier} />
					<TeamNameFild>
						<TeamNameFildName>{props.titile}</TeamNameFildName>
						<TeamNameFildCategory>{props.strategy}</TeamNameFildCategory>
					</TeamNameFild>
				</TeamName>
				<TeamChampion>
					{props.champions.map((el) => {
						return (
							<Hero
								key={"hero" + el.champion}
								img={
									process.env.PUBLIC_URL + "champions/" + el.champion + ".png"
								}
							/>
						);
					})}
				</TeamChampion>
				<TeamButton isOpen={isOpen} onClick={toggle}></TeamButton>
			</Team>
			{isOpen ? (
				<TeamInfo>
					<TeamInfoGrid>
						<TeamInfoEarly>
							<TeamInfoInfo>
								<TeamInfoInfoName>Early Camp</TeamInfoInfoName>
								<TeamInfoEarlyChamps>
									{props.earlyChampions.map((el) => {
										return (
											<TeamInfoEarlyChampion
												img={
													process.env.PUBLIC_URL + "champions/" + el + ".png"
												}
												key={"early" + el}
											/>
										);
									})}
								</TeamInfoEarlyChamps>
							</TeamInfoInfo>
						</TeamInfoEarly>
						<TeamInfoTraits>
							<TeamInfoInfo>
								<TeamInfoInfoName>Traits</TeamInfoInfoName>
								<TeamInfoTraitsWrapper>
									{props.traits.map((el) => {
										return (
											<TeamInfoTraitInfo key={"Traits" + el.name}>
												<TeamInfoTraitIcon
													img={
														process.env.PUBLIC_URL +
														"traits/" +
														el.name +
														".png"
													}
												></TeamInfoTraitIcon>
												<TeamInfoTraitNumber
													number={el.count}
												></TeamInfoTraitNumber>
											</TeamInfoTraitInfo>
										);
									})}
								</TeamInfoTraitsWrapper>
							</TeamInfoInfo>
						</TeamInfoTraits>
						<TeamInfoCarousel>
							<TeamInfoInfo>
								<TeamInfoInfoName>Carousel</TeamInfoInfoName>
								<TeamInfoEarlyChamps>
									{props.carousel.map((el) => {
										addSign();
										return (
											<React.Fragment key={"Carousel" + el}>
												<TeamInfoEarlyChampion
													img={process.env.PUBLIC_URL + "items/" + el + ".png"}
												/>
												{numberSign < 3 ? <TeamInfoCarouselSign /> : null}
											</React.Fragment>
										);
									})}
								</TeamInfoEarlyChamps>
							</TeamInfoInfo>
						</TeamInfoCarousel>
						<TeamInfoOption>
							<TeamInfoInfo>
								<TeamInfoInfoName>Options</TeamInfoInfoName>
								{props.options.map((el) => {
									return (
										<TeamInfoEarlyChamps key={"Options" + el.first}>
											{el.first === "lvl" ? (
												<TeamInfoEarlyLvl />
											) : (
												<TeamInfoEarlyChampion
													img={
														process.env.PUBLIC_URL +
														"champions/" +
														el.first +
														".png"
													}
												/>
											)}
											<TeamInfoCarouselSign />
											<TeamInfoEarlyChampion
												img={
													process.env.PUBLIC_URL +
													"champions/" +
													el.second +
													".png"
												}
											/>
										</TeamInfoEarlyChamps>
									);
								})}
							</TeamInfoInfo>
						</TeamInfoOption>
						<TeamInfoPosition>
							<TeamInfoInfo>
								<TeamInfoInfoName>Positioning</TeamInfoInfoName>
								<GameFild champions={props.champions} />
							</TeamInfoInfo>
						</TeamInfoPosition>
					</TeamInfoGrid>
				</TeamInfo>
			) : null}
		</>
	);
}

export default Team2;
