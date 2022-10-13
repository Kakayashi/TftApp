import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 2px solid ${({ theme }) => theme.colors.transparent2};
	border-bottom: 2px solid ${({ theme }) => theme.colors.transparent2};
	width: 20%;
	align-items: center;
	color: white;
	@media (max-width: 1000px) {
		width: 100%;
		border-top: 0;
		border-bottom: 0;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
`;

export const Title = styled.p`
	font-size: 20px;
	font-weight: bold;
`;

export const TeamInfoTraitInfo = styled.div`
	width: 90px;
	height: 70px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-inline: 10px;
	/* @media (max-width: 800px) {
		width: 50px;
	} */
`;

export const TeamInfoTraitIcon = styled.div`
	width: 60px;
	height: 60px;
	background: url(${(props) => props.img});
	background-size: contain;
	background-repeat: no-repeat;
	/* @media (max-width: 800px) {
		width: 25px;
		height: 25px;
	} */
`;

export const TeamInfoTraitNumber = styled.div`
	height: 28px;
	width: 40px;
	margin-left: -8px;
	background-color: #c4c4c4;
	text-align: center;
	font-size: 20px;
	position: relative;
	color: black;
	font-weight: bold;
	&::after {
		content: "${(props) => props.number}";
		position: absolute;
		top: -2px;
		left: 13px;
	}
`;
