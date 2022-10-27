import styled from "styled-components";
import { TeamInfoEarlyLvl } from "../../atoms/LvlSign/LvlSign";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 450px;
	padding-block: 10px;
	@media (max-width: 1600px) {
		width: auto;
	}

	@media (max-width: 1450px) {
		padding-block: 40px;
	}
	@media (max-width: 600px) {
		padding-top: 80px;
	}
`;

export const OptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Title = styled.p`
	top: -35px;

	position: absolute;
	font-size: 20px;
	color: white;
	font-weight: bold;
	@media (max-width: 1450px) {
		top: -10px;
	}
	@media (max-width: 600px) {
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Lvl = styled(TeamInfoEarlyLvl)`
	margin: 20px;
`;
