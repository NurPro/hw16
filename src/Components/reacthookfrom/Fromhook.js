import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Fromhook = () => {
	const {
		register,

		formState: { errors, isValid },

		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		reset();
	};

	return (
		<FormContainer>
			<h1>React Hook Form</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputLabel>
					First Name:
					<Input
						{...register('firstName', {
							pattern: /^[A-Za-z]+$/i,
							required: 'Поле обязательно к заполнению',
						})}
					/>
				</InputLabel>

				<ErrorContainer>
					{errors?.firstName && (
						<ErrorMessage>
							{errors?.firstName?.message || 'Error!'}
						</ErrorMessage>
					)}
				</ErrorContainer>

				<InputLabel>
					Last Name:
					<Input
						{...register('lastName', {
							pattern: /^[A-Za-z]+$/i,
							required: 'Поле обязательно к заполнению',
						})}
					/>
					Number:
					<Input type='number' {...register('age', { min: 18, max: 30 })} />
				</InputLabel>

				<ErrorContainer>
					{errors?.lastName && (
						<ErrorMessage>{errors?.lastName?.message || 'Error!'}</ErrorMessage>
					)}
				</ErrorContainer>

				<SubmitButton type='submit' disabled={!isValid}>
					Submit
				</SubmitButton>
			</form>
		</FormContainer>
	);
};

const FormContainer = styled.div`
	background: cornflowerblue;
	width: 350px;
	height: 380px;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 640px;
	margin-top: 50px;
`;

const InputLabel = styled.label`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	padding: 10px;
	margin-top: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 250px;
`;

const ErrorContainer = styled.div`
	height: 10px;
`;

const ErrorMessage = styled.p`
	color: red;
	font-size: 20px;
 `;

const SubmitButton = styled.button`
	padding: 8px;
	margin: 20px 60px;
	background-color: blue;
	color: white;
	border: none;
	border-radius: 13px;
	cursor: pointer;
	width: 150px;
	font-size: 15px;
	font-weight: 500;

	&:disabled {
		opacity: 1;
		cursor: not-allowed;
	}
`;

export default Fromhook;
