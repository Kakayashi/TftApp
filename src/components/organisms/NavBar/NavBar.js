import React from "react";
import { useEffect, useState } from "react";
import getWindowSize from "../../atoms/getWindowSize/getWinowSize";
import SlideBar from "../SlideBar/SlideBar";
import { Wrapper, Logo, StyledLink } from "./NavBar.style";

function NavBar() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			{windowSize.innerWidth <= 900 ? (
				<SlideBar />
			) : (
				<Wrapper>
					<Logo>TFT_app</Logo>
					<StyledLink to="/">Team Comps</StyledLink>
					<StyledLink to="/teamBuilder">Team builder</StyledLink>
					<StyledLink to="/Champions">Champions</StyledLink>
					<StyledLink to="/items">Items</StyledLink>
				</Wrapper>
			)}
		</>
	);
}

export default NavBar;
