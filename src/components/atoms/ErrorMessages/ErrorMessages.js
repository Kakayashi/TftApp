import React, { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn2 = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledText = styled.p`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.pink};
	font-size: 20px;
	margin: 2px;
	animation: ${fadeIn} 4s ease-in;
	animation-fill-mode: forwards;
`;

function ErrorMessages({ errors }) {
	return (
		<>
			{errors.map((el) => {
				return <StyledText key={"er" + el}> {el}</StyledText>;
			})}
		</>
	);
}

export default ErrorMessages;
