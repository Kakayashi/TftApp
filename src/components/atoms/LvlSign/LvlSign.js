import styled from "styled-components";

export const TeamInfoEarlyLvl = styled.div`
	width: 65px;
	height: 35px;
	border: 2px solid black;
	color: white;
	position: relative;
	background-color: ${({ theme }) => theme.colors.black};
	&::after {
		position: absolute;
		content: "LVL UP";
		top: 15%;
		left: 15%;
		font-weight: bold;
	}
`;
