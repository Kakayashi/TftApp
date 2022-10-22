import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: center;

	width: 450px;
	padding-block: 10px;
	transform: translateY(10%);
	@media (max-width: 1600px) {
		width: auto;
	}

	@media (max-width: 1450px) {
		padding-block: 0px;
		transform: translateY(0);
	}
`;

const Title = styled.div`
	position: relative;
	font-size: 20px;
	color: white;
	font-weight: bold;
	transform: translateX(-50%);
	@media (max-width: 1450px) {
		top: -10px;
	}
`;

const CounterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	left: 110px;
	top: 5px;
`;

const CounterItem = styled.div`
	border: 2px solid
		${({ id, counter }) => (id === counter ? "white" : "rgba(7, 7, 7, 0.8)")};

	color: ${({ id, counter }) =>
		id === counter ? "white" : "rgba(7, 7, 7, 0.8)"};
	cursor: pointer;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: 2px;
	height: 20px;
	border-radius: 6px;
	text-align: center;
`;

function BuilderOprionsPicker({ counter, changeCounter }) {
	return (
		<Wrapper>
			<Title>
				Options:
				<CounterWrapper>
					<CounterItem
						id={0}
						counter={counter}
						onClick={(id) => changeCounter(0)}
					>
						1
					</CounterItem>
					<CounterItem
						id={1}
						counter={counter}
						onClick={(id) => changeCounter(1)}
					>
						2
					</CounterItem>
					<CounterItem
						id={2}
						counter={counter}
						onClick={(id) => changeCounter(2)}
					>
						3
					</CounterItem>
					<CounterItem
						id={3}
						counter={counter}
						onClick={(id) => changeCounter(3)}
					>
						4
					</CounterItem>
					<CounterItem
						id={4}
						counter={counter}
						onClick={(id) => changeCounter(4)}
					>
						4
					</CounterItem>
				</CounterWrapper>
			</Title>
		</Wrapper>
	);
}

export default BuilderOprionsPicker;
