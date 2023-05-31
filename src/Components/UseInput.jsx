import { useState } from 'react';

const useInput = (initialValue, validationFunction) => {
	const [value, setValue] = useState(initialValue);
	const [isTouched, setIsTouched] = useState(false);
	const [error, setError] = useState(null);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleBlur = () => {
		setIsTouched(true);
		const validationResult = validationFunction(value);
		setError(validationResult);
	};

	const reset = () => {
		setValue(initialValue);
		setIsTouched(false);
		setError(null);
	};

	return {
		value,
		isTouched,
		error,
		handleChange,
		handleBlur,
		reset,
	};
};

export default useInput;
