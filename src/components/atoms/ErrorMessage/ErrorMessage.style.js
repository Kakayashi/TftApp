import styled, { keyframes } from "styled-components";

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;
export const Title = styled.h1`
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Wrapper = styled.div`
	overflow: hidden;
	position: absolute;
	left: 50%;
	width: 200px;
	transform: translateX(-50%);
	bottom: 10%;
	background: rgb(255, 156, 16);
	background: linear-gradient(
		90deg,
		rgba(255, 156, 16, 1) 0%,
		rgba(229, 46, 113, 1) 100%,
		rgba(253, 29, 29, 1) 100%
	);
	padding: 25px 25px 15px;
	border: 3px solid ${({ theme }) => theme.colors.black};
	border-radius: 15px;
	text-align: center;
	color: white;
	animation: ${slideAnimation} 1s ease-in-out 1 forwards,
		${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;
	${Title} {
		color: ${({ theme }) => theme.colors.white};
	}
	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 15px;
		transform: translateX(-50%);
		background: white;

		width: 60px;
		height: 5px;
		border-radius: 50px;
	}
	&::before {
		opacity: 0.5;
	}
	&::after {
		transform: translateX(-50%) scaleX(1);
		transform-origin: left top;
		animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
	}
`;
