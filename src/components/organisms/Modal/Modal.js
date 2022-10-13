import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalBackground, ModalWrapper } from "./Modal.style";
import styled from "styled-components";

const modalContainer = document.getElementById("modal-container");

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colors.black};
	position: absolute;
	color: white;
	padding: 15px;
	justify-content: center;
	width: 100px;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	border: 2px solid ${({ theme }) => theme.colors.gray2};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.orange};
	}
`;

function Modal({ handleClose, children }) {
	const modalNode = document.createElement("div");

	useEffect(() => {
		modalContainer.appendChild(modalNode);

		return () => {
			modalContainer.removeChild(modalNode);
		};
	}, [modalNode]);

	return ReactDOM.createPortal(
		<ModalBackground>
			<ModalWrapper>
				{children}
				<StyledButton onClick={handleClose}>close</StyledButton>
			</ModalWrapper>
		</ModalBackground>,
		modalNode
	);
}

export default Modal;
