import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Wrapper } from "../../atoms/Wrapper/Wrapper";
import { Title } from "../../atoms/Title/Title";
import BuilderFild from "../../molecules/BuilderFild/BuilderFild";
import BuilderChampions from "../../molecules/BuilderChampions/BuilderChampions";
import { TeamBuilderWrapper, OptionsWrapper } from "./TeamBuilder.style";
import Data from "../../../data/champions.json";
import BuilderTraits from "../../molecules/BuilderTriats/BuilderTraits";
import { useDispatch, useSelector } from "react-redux";
import { addTeam } from "../../../store";
import BuilderItems from "../../molecules/BuilderItems/BuilderItems";
import BuilderEarlyChampions from "../../molecules/BuilderEarlyChampions/BuilderEarlyChampions";
import BuilderOptions from "../../molecules/BuilderOptions/BuilderOptions";
import BuilderTextFild from "../../molecules/BuilderTextFild/BuilderTextFild";
import AddTeamButton from "../../atoms/AddTeamButton/AddTeamButton";

function TeamBuilder() {
	const dispatch = useDispatch();

	const team2 = useSelector((state) => state.team);
	const AddTeam = (e) => {
		const item = Data.find((el) => {
			return el.championId === e;
		});
		!team2.find((el) => el === item) && dispatch(addTeam(item));
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<Wrapper>
				<Title>Team Builder</Title>
				<TeamBuilderWrapper>
					<BuilderFild AddTeam={(el) => AddTeam(el)} />
					<OptionsWrapper>
						<BuilderChampions />
						<BuilderTraits />
					</OptionsWrapper>
					<OptionsWrapper>
						<BuilderTextFild />
					</OptionsWrapper>
					<OptionsWrapper>
						<BuilderItems />
					</OptionsWrapper>
					<OptionsWrapper>
						<BuilderEarlyChampions />
					</OptionsWrapper>
					<OptionsWrapper>
						<BuilderOptions />
					</OptionsWrapper>
				</TeamBuilderWrapper>
				<AddTeamButton />
			</Wrapper>
		</DndProvider>
	);
}

export default TeamBuilder;
