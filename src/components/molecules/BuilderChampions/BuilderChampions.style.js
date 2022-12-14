import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 85%;
	height: 350px;
	padding-inline: 40px;

	@media (max-width: 1500px) {
		height: 450px;
	}
	@media (max-width: 1250px) {
		height: 600px;
	}
	@media (max-width: 1150px) {
		height: 700px;
	}

	@media (max-width: 1450px) {
		width: 90%;
		height: auto;
		border: 0;
		justify-content: center;
		align-items: center;
	}
`;
