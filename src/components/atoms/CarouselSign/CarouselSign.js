import styled from "styled-components";

export const CarouselSign = styled.div`
	width: 40px;
	height: 60px;
	transform: translateY(17%);
	position: relative;
	&::before,
	&::after {
		content: "";
		position: absolute;
		height: 2px;
		height: 4px;
		background-color: white;
		width: 34px;
		top: 50%;
		left: 50%;
	}
	&::before {
		transform: translate(-50%, -50%) translateY(-11px) rotate(45deg);
	}
	&::after {
		transform: translate(-50%, -50%) translateY(11px) rotate(-45deg);
	}
`;
