import React, { useState } from 'react';
import styled from 'styled-components';

export const useCounter = () => {
	const [count, setCount] = useState(0);

	const increment = (number) => {
		setCount((prev) => prev + number);
	};
	const decrement = (number) => {
		setCount(count > 0 ? (prev) => prev - number : 0);
	};
	const reset = () => {
		setCount((prev) => (prev = 0));
	};
	return {
		increment,
		decrement,
		count,
		reset,
	};
};

const Counter = () => {
	const { increment, decrement, reset, count } = useCounter('');
	return (
		<Container>
			<div>
				<h1>{count}</h1>
				<Buttons>
					<button onClick={() => increment(4)}>+</button>
					<button onClick={() => decrement(2)}>-</button>
				</Buttons>
			</div>
			<button onClick={reset}>RESET</button>
		</Container>
	);
};

export default Counter;

const Container = styled.div`
	padding: 10px;
	color: #ff0000c5;
	background-color: cornflowerblue;
	width: 300px;
	height: 230px;
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
	margin: 30px 655px;
	border-radius: 20px;
	button {
		background-color: #1ade93cc;
		border: 1px solid grey;
		border-radius: 10px;
		width: 140px;
		height: 40px;
	}
	h1 {
		display: flex;
		justify-content: center;
	}
`;

const Buttons = styled.div`
	display: flex;
	gap: 15px;
	button {
		background-color: #58b621cf;
		border-radius: 10px;
		border: 1px solid grey;
		width: 60px;
		height: 40px;
		font-size: 25px;
		font-weight: 600;
	}
`;
