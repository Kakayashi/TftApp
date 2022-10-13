import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 50vw;
	height: auto;
	min-width: 600px;
	min-height: 600px;
	background-color: ${({ theme }) => theme.colors.black};
	border-radius: 20px;
	color: white;
	display: flex;
	flex-direction: column;
	@media (max-width: 600px) {
		min-width: 500px;
	}
`;

export const ModalBackground = styled.div`
	::before {
		content: "";
		opacity: 0.5;
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: ${({ theme }) => theme.colors.black};
	}
`;
