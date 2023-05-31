import { useState, useEffect, useRef } from 'react';

export const useTimer = (initialTime = 0) => {
	const [time, setTime] = useState(initialTime);
	const [isActive, setIsActive] = useState(false);
	const countRef = useRef(null);

	useEffect(() => {
		if (isActive) {
			countRef.current = setInterval(() => {
				setTime((time) => time - 1);
			}, 500);
		} else {
			clearInterval(countRef.current);
		}
		return () => clearInterval(countRef.current);
	}, [isActive]);

	const start = () => {
		setIsActive(true);
	};

	const stop = () => {
		setIsActive(false);
	};

	const restart = () => {
		setIsActive(false);
		setTime(initialTime);
	};

	const seconds = time % 60;
	const minutes = Math.floor(time / 60);

	return { minutes, seconds, start, stop, restart, isActive };
};
