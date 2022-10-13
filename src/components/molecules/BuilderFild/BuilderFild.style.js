import styled from "styled-components";

export const HexagonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 750px;
	margin-top: 10px;
	@media (max-width: 1000px) {
		width: 525px;
	}
	@media (max-width: 700px) {
		width: 337.5px;
	}
	@media (max-width: 424px) {
		width: 240px;
	}
`;

export const Space = styled.div`
	width: 50px;
	content: "";
	@media (max-width: 1000px) {
		width: 35px;
	}
	@media (max-width: 700px) {
		width: 22.5px;
	}
	@media (max-width: 424px) {
		width: 16px;
	}
`;
