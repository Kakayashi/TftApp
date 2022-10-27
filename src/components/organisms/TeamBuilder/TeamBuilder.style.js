import styled from "styled-components";

export const TeamBuilderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const OptionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	@media (max-width: 1450px) {
		flex-direction: column;

		justify-content: center;
		align-items: center;
	}
`;
