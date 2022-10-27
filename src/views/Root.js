import React, { useEffect } from "react";
import AnimatedBackground from "../components/atoms/AnimatedBackground/AnimatedBackground";
import NavBar from "../components/organisms/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champions from "../components/organisms/Champions/Champions";
import styled from "styled-components";
import Items from "../components/organisms/Items/Items";
import TeamComps from "../components/organisms/TeamComps/TeamComps";
import TeamBuilderProvider from "../components/organisms/TeamBuilder/TeamBuilderProvider";

const Wrapper = styled.div`
	overflow-x: hidden;
`;

function Root() {
	return (
		<BrowserRouter>
			<Wrapper>
				<NavBar />
				<AnimatedBackground />

				<Routes>
					<Route path="/" exact element={<TeamComps />} />
					<Route path="/teamBuilder" exact element={<TeamBuilderProvider />} />
					<Route path="/items" exact element={<Items />} />
					<Route path="/Champions" exact element={<Champions />} />
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default Root;
