import useInput from './UseInput';
import styled from 'styled-components';

const SignUpForm = () => {
	const emailValidation = (value) => {
		if (!value) {
			return 'Email is required';
		}
		if (!value.includes('@')) {
			return 'Email is invalid';
		}
		return null;
	};

	const passwordValidation = (value) => {
		if (!value) {
			return 'Password is required';
		}
		if (value.length < 8) {
			return 'Password must be at least 8 characters';
		}
		return null;
	};

	const emailInput = useInput('', emailValidation);
	const passwordInput = useInput('', passwordValidation);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!emailInput.error && !passwordInput.error) {
			console.log('Form submitted!');
			emailInput.reset();
			passwordInput.reset();
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<label>
				Email:
				<input
					type='email'
					value={emailInput.value}
					onChange={emailInput.handleChange}
					onBlur={emailInput.handleBlur}
				/>
			</label>
			{emailInput.isTouched && emailInput.error && <p>{emailInput.error}</p>}

			<label>
				Password:
				<input
					type='password'
					value={passwordInput.value}
					onChange={passwordInput.handleChange}
					onBlur={passwordInput.handleBlur}
				/>
			</label>
			{passwordInput.isTouched && passwordInput.error && (
				<p>{passwordInput.error}</p>
			)}

			<button type='submit'>Sign Up</button>
		</Form>
	);
};

export default SignUpForm;

const Form = styled.form`
	display: flex;
	gap: 35px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 640px;
	height: 450px;
	width: 350px;
	background-color: cornflowerblue;
	border-radius: 25px;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}

	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	label > input {
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	label > p {
		margin: 5px 0 0;
		color: red;
		font-size: 14px;
	}

	button {
		padding: 10px 20px;
		font-size: 16px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 13px;
		width: 140px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0069d9;
	}
	input {
		width: 250px;
	}
`;
