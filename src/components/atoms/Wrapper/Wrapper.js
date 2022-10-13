import styled from "styled-components";

export const Wrapper = styled.div`
	width: 80%;
	height: auto;
	background-color: ${({ theme }) => theme.colors.black};
	margin-inline: auto;
	margin-top: 10vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px 0;
	border-radius: 20px;
	position: relative;
	padding-top: 80px;
`;
