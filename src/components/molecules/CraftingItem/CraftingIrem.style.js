import styled from "styled-components";
export const WrapperItem = styled.div`
	position: relative;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: -20px 0px;
`;

export const AllWrapperItems = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

export const Item = styled.div`
	margin: 0px;
	min-width: 80px;
	min-height: 80px;
	border: 2px solid black;
	margin: 20px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: relative;
	background-repeat: no-repeat;
	cursor: pointer;

	@media (max-width: 600px) {
		min-width: 50px;
		min-height: 50px;
	}

	&::after {
		position: absolute;
		color: white;
		width: 200px;
		text-align: center;
		left: -60px;
		top: -25px;
		@media (max-width: 600px) {
			left: -15px;
			top: -25px;
			font-size: 11px;
			width: 80px;
			text-align: center;
		}
		${(props) => (props.name ? `content: "${props.name}"` : "")}
	}
`;

export const PlusSign = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(3.56vw + 3vw);
	height: calc(3.56vw + 3vw);
	min-width: 40px;
	min-height: 40px;
	position: relative;
	margin-inline: -20px;

	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 3.23vw;
		height: 0.404vw;

		background-color: white;
		left: 50%;
	}
	&::after {
		transform: translateX(-50%) rotate(90deg);
	}
	&::before {
		transform: translateX(-50%);
	}
`;

export const EqualSign = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(3.56vw + 3vw);
	height: calc(3.56vw + 3vw);
	min-width: 40px;
	min-height: 40px;
	position: relative;
	margin-inline: -8px;

	&::before,
	&::after {
		position: absolute;
		content: "";
		width: 3.53vw;
		height: 0.459vw;
		background-color: white;
		left: 50%;
	}
	&::after {
		transform: translateX(-50%) translateY(-1vw);
	}
	&::before {
		transform: translateX(-50%) translateY(1vw);
	}
`;

export const Search = styled.input`
	padding: 10px 12px;
	border: 2px solid ${({ theme }) => theme.colors.black};
	box-sizing: border-box;
	width: 200px;
	margin-inline: auto;
	text-align: center;
	border-radius: 25px;
	font-size: ${({ theme }) => theme.fontSize.l};
	&:focus {
		outline: none;
		box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
	}
`;

export const Wrapper2 = styled.div`
	display: flex;
	flex-direction: column;
`;
