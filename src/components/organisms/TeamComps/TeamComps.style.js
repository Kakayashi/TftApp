import styled from "styled-components";

export const Wrapper = styled.div`
	width: 80vw;
	margin-top: 5vw;
	background-color: ${({ theme }) => theme.colors.black};
	margin-inline: auto;
	border-radius: 25px;
	padding: 20px;
`;

export const Title = styled.div`
	font-size: 40px;
	text-align: center;
	color: white;
	font-weight: bold;
`;
