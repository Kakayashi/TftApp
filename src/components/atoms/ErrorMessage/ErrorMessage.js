import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title } from "./ErrorMessage.style";

const defaultErrorMessage =
	"Something go wrong. Please try again, or contact our support.";

const ErrorMessage = ({ message = defaultErrorMessage, kkey, title }) => {
	return (
		<Wrapper key={kkey}>
			<Title>{title}</Title>
			{message.map((el) => {
				return <p>{el}</p>;
			})}
		</Wrapper>
	);
};

ErrorMessage.prototype = {
	message: PropTypes.string,
};

export default ErrorMessage;
