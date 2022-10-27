import React, { useState } from "react";
import styled from "styled-components";
import Team from "../../molecules/Team/Team";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {Title} from "../../organisms/TeamComps/TeamComps.style"

function UserTeam() {
    const team = useSelector((state) => state.teamComp);
	let userTeam;
	console.log("xd", team);
	if (team.length !== 0) {
		userTeam = team.map((el) => {
			return (
				<Team
					key={uuid()}
					titile={el.titile}
					tier={el.tier}
					strategy={el.strategy}
					champions={el.champions}
					earlyChampions={el.earlyChampions}
					traits={el.traits}
					carousel={el.carousel}
					options={el.options}
				/>
			);
		});
	return (<div>
        {team.length !== 0 && <Title>User Team</Title>}
        {userTeam}
        <div>
        );
}

export default UserTeam;
