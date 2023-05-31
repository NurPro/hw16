import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #6f8bc0;
	width: 350px;
	height: 200px;
	border-radius: 25px;
	margin-left: 640px;
	margin-top: 30px;
`;

const TimeDisplay = styled.div`
	font-size: 4rem;
	font-weight: bold;
	color: ${({ isRunning }) => (isRunning ? '#000' : '#f00')};
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 200px;
	margin-top: 20px;
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	background-color: ${({ color }) => color};
	border: none;
	border-radius: 5px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	transition: opacity 0.3s ease;

	&:hover {
		opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
	}
`;

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => clearInterval(intervalRef.current);
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handleStop = () => {
		setIsRunning(false);
		setTime(0);
	};

	const handlePause = () => {
		setIsRunning(false);
	};

	const handleResume = () => {
		setIsRunning(true);
	};

	return (
		<TimerContainer>
			<TimeDisplay isRunning={isRunning}>
				{new Date(time * 1000).toISOString().substr(11, 8)}
			</TimeDisplay>
			<ButtonContainer>
				{!isRunning ? (
					<Button color='#090' onClick={handleStart}>
						Start
					</Button>
				) : (
					<>
						<Button color='#f00' onClick={handleStop}>
							Stop
						</Button>
						<Button color='#00f' onClick={handlePause}>
							Pause
						</Button>
					</>
				)}
				{!isRunning && time > 0 && (
					<Button color='#090' onClick={handleResume}>
						Resume
					</Button>
				)}
			</ButtonContainer>
		</TimerContainer>
	);
};

export default Stopwatch;
