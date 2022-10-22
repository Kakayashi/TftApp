import React from "react";
import Hexagon from "../../atoms/Hexagon/Hexagon";
import { Space, HexagonWrapper } from "./BuilderFild.style";

function BuilderFild({ AddTeam }) {
	let items = [];

	for (let i = 0; i < 28; i++) {
		items.push(
			<React.Fragment key={"hexagon2" + i}>
				<Hexagon position={i} AddTeam={(el) => AddTeam(el)} />
			</React.Fragment>
		);

		i === 6 || i === 20 ? (
			items.push(
				<React.Fragment key={"Space" + i}>
					<Space /> <Space />
				</React.Fragment>
			)
		) : (
			<></>
		);
	}

	return <HexagonWrapper>{items}</HexagonWrapper>;
}

export default BuilderFild;
