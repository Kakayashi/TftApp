import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../organisms/TeamBuilder/TeamBuilderThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addTeamComp } from "../../../store";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.orange};
	width: 140px;
	height: 80px;
	color: white;
	font-size: 24px;
	font-weight: bold;
	border-radius: 25px;
	transition: 0.2s;
	&:hover {
		background-color: ${({ theme }) => theme.colors.pink};
	}
`;

const StyledText = styled.p`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.pink};
	font-size: 25px;
`;

function AddTeamButton() {
	const context = useTheme();
	const team2 = useSelector((state) => state.teamComp);
	const dispatch = useDispatch();
	const [error, setError] = useState([]);

	const FindErrors = () => {
		setError([]);
		let newError = [];
		context.titile === "" && newError.push("Add title");
		context.strategy === "" && newError.push("Add strategy");
		context.champions === [] && newError.push("Add champions");
		error === [] && dispatch(addTeamComp(context));
		newError === [] && setError(newError);
		console.log(team2);
		console.log(error);
	};

	return (
		<>
			{error.map((el) => {
				<StyledText>xd</StyledText>;
			})}
			<StyledButton onClick={() => FindErrors()}>Add team</StyledButton>
		</>
	);
}

export default AddTeamButton;
