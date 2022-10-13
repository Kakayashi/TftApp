import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalWrapper } from "./Modal.style";
import styled from "styled-components";

const modalContainer = document.getElementById("modal-container");

const ModalNameWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-evenly;
	padding: 40px 0;
	position: relative;

	span {
		font-size: 50px;
	}
`;

const ModalImg = styled.div`
	width: 100px;
	height: 100px;
	background: url(${(props) => props.img});
	background-size: contain;
	position: absolute;
	left: 40px;
	top: 20px;
`;

const ModalText = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;

	p {
		margin-bottom: 4px;
		color: ${({ theme }) => theme.colors.orange};
	}

	&::after {
		position: absolute;
		width: 300px;
		height: 30px;
		content: "";
		background: url(${(props) => props.img});
		background-size: contain;
		background-repeat: no-repeat;
		left: 35%;
	}
`;

const WrapperModalText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

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

function ModalItem({ handleClose, currentItem }) {
	const modalNode = document.createElement("div");

	useEffect(() => {
		modalContainer.appendChild(modalNode);

		return () => {
			modalContainer.removeChild(modalNode);
		};
	});

	return ReactDOM.createPortal(
		<ModalWrapper>
			<div>text</div>
		</ModalWrapper>,
		modalNode
	);
}

export default ModalItem;
