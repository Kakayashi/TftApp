import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../organisms/TeamBuilder/TeamBuilderThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addTeamComp } from "../../../store";
import ErrorMessages from "../ErrorMessages/ErrorMessages";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.orange};
	width: 140px;
	height: 80px;
	color: white;
	font-size: 24px;
	font-weight: bold;
	border-radius: 25px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.pink};
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function AddTeamButton() {
	const context = useTheme();
	const team2 = useSelector((state) => state.teamComp);
	const dispatch = useDispatch();
	const [error, setError] = useState([]);
	const [keyCounter, setKeyCounter] = useState(12);

	const FindErrors = () => {
		setError([]);
		let newError = [];
		context.titile === "" && newError.push("Add name!");
		context.strategy === "" && newError.push("Add strategy!");
		context.champions.length === 0 && newError.push("Add champions!");
		newError.length === 0 && dispatch(addTeamComp(context));
		newError.length === 0 && newError.push("Added!");
		setError(newError);
		console.log(team2);
	};

	return (
		<Wrapper>
			<StyledButton
				onClick={() => {
					console.log(keyCounter);
					setKeyCounter(keyCounter + 1);
					FindErrors();
				}}
			>
				Add team
			</StyledButton>
			{error.length !== 0 && (
				<ErrorMessage
					kkey={"ErrorKey" + keyCounter}
					message={error}
					title={error[0] === "Added!" ? "Succes!" : "Ooops!"}
				></ErrorMessage>
			)}
		</Wrapper>
	);
}

export default AddTeamButton;
