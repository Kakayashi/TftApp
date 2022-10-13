import React from "react";
import styled from "styled-components";

const Hexagon = styled.div`
	height: 40px;
	width: 40px;
	background: ${({ theme }) => theme.colors.orange};
	-webkit-clip-path: polygon(
		50% 0%,
		95% 25%,
		95% 75%,
		50% 100%,
		5% 75%,
		5% 25%
	);

	clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
	margin-top: -6px;
	background: url(${(props) => props.img});
	background: ${(props) => (props.img ? `` : "orange")};
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 800px) {
		height: 30px;
		width: 30px;
	}
`;

const Wrapper = styled.div`
	margin-top: 8px;
	display: flex;
	flex-direction: row;
	width: 300px;
	flex-wrap: wrap;
	@media (max-width: 800px) {
		width: 225px;
	}
`;
const Space = styled.div`
	width: 20px;
	@media (max-width: 800px) {
		width: 15px;
	}
`;

function GameFild(props) {
	let items = [];
	let fild = [];
	props.champions.forEach((el) => {
		fild[el.position] = el.champion;
	});

	for (let i = 0; i < 28; i++) {
		items.push(
			<React.Fragment key={"hexagon" + i}>
				{fild[i] === undefined ? (
					<Hexagon />
				) : (
					<Hexagon
						key={"hexagon" + i}
						img={process.env.PUBLIC_URL + "champions/" + fild[i] + ".png"}
					/>
				)}
			</React.Fragment>
		);

		i === 6 || i === 20 ? (
			items.push(
				<React.Fragment key={"Space" + i}>
					<Space /> <Space />
				</React.Fragment>
			)
		) : (
			<></>
		);
	}
	return <Wrapper> {items} </Wrapper>;
}

export default GameFild;
