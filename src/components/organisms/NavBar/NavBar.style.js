import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
	width: 100%;
	height: 80px;
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Logo = styled.div`
	margin: 30px;
	font-size: 40px;
`;

export const StyledLink = styled(NavLink)`
	font-size: 20px;
	margin-inline: 20px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	font-size: 25px;
`;
