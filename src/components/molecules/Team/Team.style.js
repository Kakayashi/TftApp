import styled, { keyframes } from "styled-components";

export const Team = styled.div`
	width: 80%;
	min-height: 80px;
	background-color: ${({ theme }) => theme.colors.black};
	margin: 20px auto;
	content: "";
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	position: relative;
	padding: 0px 10px;
	@media (max-width: 1254px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const TeamName = styled.div`
	width: 30%;
	min-width: 200px;
	display: flex;
	flex-direction: row;
`;

export const TeamNameTier = styled.div`
	min-width: 40px;
	height: 42px;
	font-size: 25px;
	font-weight: bold;
	color: white;
	position: relative;
	margin: 20px;
	border-radius: 10px;

	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ tier }) =>
		tier === "S"
			? "rgba(235, 92, 10, 0.8)"
			: tier === "A"
			? "rgba(216, 72, 121, 0.8)"
			: tier === "B"
			? "rgba(29, 111, 189, 0.8)"
			: "red"};

	&::before {
		position: absolute;
		content: "${(props) => props.tier}";
		top: 2px;
		left: 12px;
	}
`;

export const TeamNameFild = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TeamNameFildName = styled.div`
	color: white;
	font-size: 18px;
	font-weight: bold;
`;
export const TeamNameFildCategory = styled.div`
	color: white;
	background-color: ${({ theme }) => theme.colors.gray2};
	padding: 0px 4px;
`;

export const TeamButton = styled.div`
	width: 10%;
	height: 37px;
	position: absolute;
	right: -10px;
	top: 25px;
	cursor: pointer;
	transition: transform ease-in-out 0.3s;
	transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};

	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 30px;
		height: 5px;
		background-color: ${({ theme }) => theme.colors.white};

		left: 50%;
	}

	&::before {
		top: 9px;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&::after {
		bottom: 9px;
		transform: translate(-50%, 50%) rotate(-45deg);
	}
	@media (max-width: 1154px) {
		width: 5%;
		right: 10px;
		top: 25px;
		&::before,
		&::after {
			width: 20px;
			height: 3px;
			left: 50%;
		}
		&::before {
			top: 12px;
		}
		&::after {
			bottom: 12px;
		}
	}
`;

export const TeamChampion = styled.div`
	min-height: 80px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: 1154px) {
		padding-bottom: 20px;
	}
`;

export const Hero = styled.div`
	width: 58px;
	height: 58px;
	margin: 0px 4px;
	border: 2px solid black;
	background-color: pink;
	background: url(${(props) => props.img});
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 1154px) {
		width: 48px;
		height: 48px;
		margin: 2px 4px;
	}
`;

const FadeIn = keyframes`
	0%{
		transform: translateY(-200px);
		opacity: 0%;
		z-index: -1;
	}
	20%{
		opacity: 0%;
		
	}
	60%{
		z-index: -1;
	}
	100%{
		z-index:1;
		opacity: 100%;
		transform: translateY(0px);
	}
`;

export const TeamInfo = styled.div`
	width: 80%;
	min-height: 240px;
	background-color: ${({ theme }) => theme.colors.black};
	margin-inline: auto;
	margin-top: -20px;
	content: "";
	position: relative;
	padding: 0px 10px;
	animation-name: ${FadeIn};
	animation-duration: 0.5s;
	@media (max-width: 1254px) {
		flex-direction: column;
		align-items: center;
		min-height: 400px;
	}
	@media (max-width: 800px) {
		min-height: 500px;
	}
`;

export const TeamInfoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 1fr 2fr;
	height: 200px;
	justify-items: center;
	align-items: center;
	@media (max-width: 1254px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr) repeat(2, 2fr);
	}
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr) 2fr;
	}
`;

export const TeamInfoEarly = styled.div`
	grid-column: 1/3;
	grid-row: 1;
	@media (max-width: 1254px) {
		grid-column: 1/2;
		grid-row: 1;
	}
	@media (max-width: 800px) {
		grid-column: 1/2;
		grid-row: 1;
	}
`;

export const TeamInfoTraits = styled.div`
	grid-column: 3/5;
	grid-row: 1;

	@media (max-width: 1254px) {
		grid-column: 2/3;
		grid-row: 1;
	}
	@media (max-width: 800px) {
		grid-column: 1/2;
		grid-row: 2;
	}
`;

export const TeamInfoCarousel = styled.div`
	grid-column: 5/7;
	grid-row: 1;
	@media (max-width: 1254px) {
		grid-column: 1/2;
		grid-row: 2;
	}
	@media (max-width: 800px) {
		grid-column: 1/2;
		grid-row: 3;
	}
`;

export const TeamInfoOption = styled.div`
	grid-column: 1/4;
	grid-row: 2;

	@media (max-width: 1254px) {
		grid-column: 2/3;
		grid-row: 2;
	}
	@media (max-width: 800px) {
		grid-column: 1/2;
		grid-row: 4;
	}
`;

export const TeamInfoPosition = styled.div`
	grid-column: 4/8;
	grid-row: 2;

	@media (max-width: 1254px) {
		grid-column: 1/3;
		grid-row: 3;
	}
	@media (max-width: 800px) {
		grid-column: 1/2;
		grid-row: 5;
	}
`;

export const TeamInfoInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: center;
	color: white;
	flex-wrap: wrap;
`;

export const TeamInfoInfoName = styled.div`
	font-size: 15px;
`;

export const TeamInfoEarlyChamps = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const TeamInfoEarlyChampion = styled.div`
	width: 35px;
	height: 35px;
	border: 2px solid black;
	margin: 0px 2px;
	background: url(${(props) => props.img});
	background-size: contain;
	background-repeat: no-repeat;
`;

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

export const TeamInfoTraitIcon = styled.div`
	width: 35px;
	height: 35px;
	margin: 2px solid black;
	background: url(${(props) => props.img});
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 800px) {
		width: 25px;
		height: 25px;
	}
`;

export const TeamInfoTraitInfo = styled.div`
	width: 60px;
	height: 45px;
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: 800px) {
		width: 50px;
	}
`;

export const TeamInfoTraitsWrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 800px) {
		width: 200px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
`;

export const TeamInfoTraitNumber = styled.div`
	height: 18px;
	width: 20px;
	margin-left: -6px;
	background-color: #c4c4c4;
	text-align: center;
	font-size: 15px;
	position: relative;
	color: black;
	font-weight: bold;
	&::after {
		content: "${(props) => props.number}";
		position: absolute;
		top: -2px;
		left: 2px;
	}
`;

export const TeamInfoCarouselSign = styled.div`
	width: 25px;
	height: 35px;
	margin: 2px;

	position: relative;
	&::before,
	&::after {
		content: "";
		position: absolute;
		height: 2px;
		height: 3px;
		background-color: white;
		width: 10px;
		top: 50%;
		left: 50%;
	}
	&::before {
		transform: translate(-50%, -50%) translateY(-3px) rotate(45deg);
	}
	&::after {
		transform: translate(-50%, -50%) translateY(3px) rotate(-45deg);
	}
`;
