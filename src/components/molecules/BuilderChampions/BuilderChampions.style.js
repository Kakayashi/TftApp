import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 80%;
	height: 350px;
	padding-inline: 40px;

	@media (max-width: 1500px) {
		height: 450px;
	}
	@media (max-width: 1250px) {
		height: 500px;
	}

	@media (max-width: 1000px) {
		width: 86%;
		height: auto;
		border: 0;
		justify-content: center;
		align-items: center;
	}
`;
