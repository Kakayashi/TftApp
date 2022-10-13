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

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;
