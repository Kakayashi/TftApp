import React from "react";
import TeamBuilder from "./TeamBuilder";
import { TeamBuilderThemeContext } from "./TeamBuilderThemeContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function TeamBuilderProvider() {
	return (
		<DndProvider backend={HTML5Backend}>
			<TeamBuilderThemeContext>
				<TeamBuilder />
			</TeamBuilderThemeContext>
		</DndProvider>
	);
}

export default TeamBuilderProvider;
