import styled from "styled-components";

export const Wrapper = styled.div`
	margin-block: 40px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 85%;
	margin-inline: 40px;
	color: white;
	justify-content: space-between;

	@media (max-width: 1450px) {
		justify-content: center;
	}
	@media (max-width: 1250px) {
		width: 70%;
	}
	@media (max-width: 1000px) {
		width: 90%;
	}
`;

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
