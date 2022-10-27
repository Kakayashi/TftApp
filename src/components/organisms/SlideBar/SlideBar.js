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
							<StyledLink onClick={() => setIsOpen(!isOpen)} to="/">
								Team Comps
							</StyledLink>
						</li>
						<li>
							<StyledLink onClick={() => setIsOpen(!isOpen)} to="/teamBuilder">
								Team Builder
							</StyledLink>
						</li>
						<li>
							<StyledLink onClick={() => setIsOpen(!isOpen)} to="/Champions">
								Champions
							</StyledLink>
						</li>
						<li>
							<StyledLink onClick={() => setIsOpen(!isOpen)} to="/items">
								Items
							</StyledLink>
						</li>
					</ul>
				</Navigation>
			) : null}
		</>
	);
}

export default SlideBar;
