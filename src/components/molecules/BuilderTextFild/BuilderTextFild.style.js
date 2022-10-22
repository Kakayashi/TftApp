import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 85%;
	display: flex;
	flex-direction: row;
	margin-inline: 40px;
	margin-block: 40px;

	align-items: center;

	justify-content: center;

	@media (max-width: 1000px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const TeamPicker = styled.div`
	width: 60px;
	height: 60px;
	font-size: 45px;
	font-weight: bold;
	color: white;
	position: relative;
	margin: 10px;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ tier }) =>
		tier === "S"
			? "rgba(235, 92, 10, 0.8)"
			: tier === "A"
			? "rgba(216, 72, 121, 0.8)"
			: tier === "B"
			? "rgba(29, 111, 189, 0.8)"
			: "red"};

	&::before {
		position: absolute;
		content: "${(props) => props.tier}";
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const ChoseWrapper = styled.div`
	visibility: ${({ isClicked }) => (isClicked ? "visible" : "hidden")};
	position: absolute;
	left: 0;
	top: -30px;
	transform: translate(-13%, 34%);
	background-color: ${({ theme }) => theme.colors.black};
	padding: 10px;
	padding-bottom: 1px;
	z-index: 100;
`;
export const TeamPickerList = styled(TeamPicker)`
	margin: 6px 0px;
`;
export const TeamPickerWrapper = styled.div`
	width: 80px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 10px;
	padding-top: 8px;

	background-color: ${({ isClicked }) =>
		isClicked ? "rgba(7, 7, 7, 0.8)" : "rgba(7, 7, 7, 0.0)"};
`;

export const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -10px;
`;

export const Search = styled.input`
	background-color: ${({ theme }) => theme.colors.transparent2};
	color: white;
	padding: 10px 12px;
	border: 2px solid ${({ theme }) => theme.colors.orange};
	box-sizing: border-box;
	width: 200px;
	margin-inline: auto;
	text-align: center;
	border-radius: 15px;
	font-size: ${({ theme }) => theme.fontSize.l};
	margin-inline: 30px;
	position: relative;
	&:focus {
		outline: none;
		border: 2px solid ${({ theme }) => theme.colors.pink};
	}
`;

export const Title = styled.div`
	color: white;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	padding: 10px;
`;
