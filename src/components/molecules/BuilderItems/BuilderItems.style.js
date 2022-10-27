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

	@media (max-width: 1600px) {
		flex-direction: column;
	}

	@media (max-width: 1450px) {
		justify-content: center;
	}

	@media (max-width: 1000px) {
		width: 90%;
	}
`;

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px 0;
`;
