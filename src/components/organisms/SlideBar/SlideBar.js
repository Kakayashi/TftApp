import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { MenuToogleButton, Navigation, StyledLink } from "./SlideBar.style";

function SlideBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<MenuToogleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
			</MenuToogleButton>
			{isOpen ? (
				<Navigation>
					<ul>
						<li>
							<StyledLink to="/">Lorem</StyledLink>
						</li>
						<li>
							<StyledLink to="/">Lorem2</StyledLink>
						</li>
						<li>
							<StyledLink to="/">Lorem3</StyledLink>
						</li>
						<li>
							<StyledLink to="/">Lorem4</StyledLink>
						</li>
					</ul>
				</Navigation>
			) : null}
		</>
	);
}

export default SlideBar;
