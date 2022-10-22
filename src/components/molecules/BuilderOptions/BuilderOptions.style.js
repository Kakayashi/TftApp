import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 85%;
	display: flex;
	flex-direction: row;
	margin-inline: 40px;
	align-items: center;
	margin-top: 80px;
	@media (max-width: 1450px) {
		flex-direction: column;
		width: 100%;
	}
`;
