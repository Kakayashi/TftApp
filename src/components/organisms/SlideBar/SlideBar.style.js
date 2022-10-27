import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const AppearAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity: 1;
    }
`;

export const Navigation = styled.nav`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.black2};
	z-index: 999;
	position: absolute;
	left: 0;
	top: 0;
	animation: 0.3s ease-in-out 1 forwards ${AppearAnimation};

	ul {
		margin: 0;
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;

		li {
			margin: 20px 0;
		}
	}
`;

export const MenuToogleButton = styled.button`
	width: 40px;
	height: 40px;
	z-index: 9999;
	position: absolute;
	top: 20px;
	left: 20px;
	background-color: ${({ theme }) => theme.colors.orange};
	overflow-x: hidden;
	border: 2px solid black;

	span:first-child {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(
			${({ isOpen }) => (isOpen ? "calc(-100% - 2px)" : 0)}
		);
		transition: transform ease-in-out 0.3s;

		&::before,
		&::after {
			position: absolute;
			content: "";
			width: 17px;
			height: 3px;
			background-color: black;

			left: 50%;
		}

		&::before {
			top: 13px;
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&::after {
			bottom: 13px;
			transform: translate(-50%, 50%) rotate(-45deg);
		}
	}

	span:last-child {
		transform: translateX(
			${({ isOpen }) => (isOpen ? "calc(-100% - 2px)" : 0)}
		);
		transition: transform ease-in-out 0.3s;

		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: calc(100% + 2px);

		&::before,
		&::after {
			position: absolute;
			content: "";
			width: 25px;
			height: 3px;
			background-color: black;
			top: 50%;
			left: 50%;
		}

		&::before {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&::after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
`;

export const StyledLink = styled(NavLink)`
	font-size: 25px;
	text-decoration: none;
	color: white;
	font-weight: bolder;
	transition: 0.2s;
	&:hover {
		color: orange;
	}
`;
