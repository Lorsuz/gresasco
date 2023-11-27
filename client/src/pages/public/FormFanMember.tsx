import React, { useState } from 'react';
import InputField from '../../components/inputs/InputField';
import InputSelectField from '../../components/inputs/InputSelectField';
import InputRadioField from '../../components/inputs/InputRadioField';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styled from 'styled-components';

const FormFanMember = (): React.FunctionComponentElement<JSX.Element> => {
	const [currentPage, setCurrentPage] = useState(1);
	const [fildsetPages] = useState<Array<JSX.Element>>([
		<fieldset>
			<legend>Dados Pessoais</legend>
			<InputField name='name' label='Nome' placeholder='Carlos' />
			<InputField name='birth' label='Data de Nascimento' type='date' />
			<InputField name='cpf' label='CPF' placeholder='012.345.567-91' />
		</fieldset>,
		<fieldset>
			<legend>Dados de Contato</legend>
			<InputField name='email' label='Email' placeholder='carlos@academicos.com.br' type='email' />
			<InputField name='tell' label='Telefone' placeholder='+00 (00) 0 0000-0000' type='tell' />
		</fieldset>,
		<fieldset>
			<legend>Endereço</legend>
			<InputField name='country' label='País' placeholder='Brasil' />
			<InputSelectField
				name='state'
				label='Estado'
				placeholder='Selecione seu estado'
				options={[
					'Acre',
					'Alagoas',
					'Amapá',
					'Amazonas',
					'Bahia',
					'Ceará',
					'Distrito Federal',
					'Espírito Santo',
					'Goiás',
					'Maranhão',
					'Mato Grosso',
					'Mato Grosso do Sul',
					'Minas Gerais',
					'Pará',
					'Paraíba',
					'Paraná',
					'Pernambuco',
					'Piauí',
					'Rio de Janeiro',
					'Rio Grande do Norte',
					'Rio Grande do Sul',
					'Rondônia',
					'Roraima',
					'Santa Catarina',
					'São Paulo',
					'Sergipe',
					'Tocantins'
				]}
			/>
			<InputField name='city' label='Cidade' placeholder='Juatina' />
			<InputField name='neighborhood' label='Bairro' placeholder='Centro' />
			<InputField name='street' label='Logradouro' placeholder='Rua Soares' />
			<InputField name='number' label='Número' placeholder='123' />
			<InputField name='complement' label='Complemento' placeholder='Apt. 456' />
			<InputField name='cep' label='CEP' placeholder='12345-678' />
		</fieldset>,
		<fieldset>
			<legend>Perfil</legend>
			<InputField name='height' label='Altura' placeholder='1.75m' />
			<InputField name='weight' label='Peso' placeholder='65Kg' />
			<InputSelectField
				name='mannequin'
				label='Manequim'
				placeholder='Selecione seu manequim'
				options={['PP', 'P', 'M', 'G', 'GG', 'XXG']}
			/>
		</fieldset>,
		<fieldset>
			<legend>Sobre Você</legend>
			<InputRadioField
				name='experience'
				placeholder='Você possue experiência em desfiles?'
				// showAdditionalInput={false}
				radios={[
					{
						value: 'yes',
						label: 'Sim'
					},
					{
						value: 'no',
						label: 'Não'
					}
				]}
			/>
			<InputRadioField
				name='fanMember'
				placeholder='Você é sócio torcedor da escola?'
				radios={[
					{
						value: 'yes',
						label: 'Sim'
					},
					{
						value: 'no',
						label: 'Não'
					}
				]}
			/>
		</fieldset>
	]);

	const totalPages = fildsetPages.length;

	const setPrevPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
	};

	const setNextPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (currentPage !== totalPages) setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log('Submit');
	};

	return (
		<StyledFormFanMember>
			<form onSubmit={handleSubmit}>
				{fildsetPages[currentPage - 1]}
				<div className='pagination'>
					<button onClick={setPrevPage} disabled={currentPage === 1}>
						<FaAngleLeft />
						<span>Anterior</span>
					</button>
					{/* ({currentPage} de {totalPages}) */}
					<div className='dots'>
						{[...Array(totalPages)].map((_, index) => (
							<span key={index} className={currentPage === index + 1 ? 'active' : ''}></span>
						))}
					</div>

					<button onClick={setNextPage} type={currentPage === totalPages ? 'submit' : 'button'}>
						<span>{currentPage === totalPages ? 'Finalizar' : 'Próximo'}</span>
						<FaAngleRight />
					</button>
				</div>
			</form>
		</StyledFormFanMember>
	);
};

const StyledFormFanMember = styled.main`
	margin: 150px 0 100px;
	display: flex;
	justify-content: center;

	* {
		/* outline: 1px dotted; */
	}

	form {
		width: 50%;
		padding-bottom: 50px;
		fieldset {
			border: 1px solid #ccc;
			border-radius: 10px;
			margin-bottom: 50px;

			legend {
				font-size: 30px;
				font-weight: bold;
				margin: 0 0 20px 25px;
				padding: 0 10px;
			}
		}
		.pagination {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-content: center;
		}
		span {
			font-size: 20px;
			font-weight: bold;
			color: var(--color-primary-soft);
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.dots {
			display: flex;
			justify-content: center;
			align-items: center;

			span {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #ccc;
				margin: 0 5px;

				&.active {
					background-color: var(--color-primary-soft);
				}
			}
		}

		button {
			padding: 10px;
			cursor: pointer;
			padding: 10px 20px;
			background-color: var(--color-primary-soft);
			border-radius: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;

			* {
				font-size: 20px;
				font-weight: normal;
				color: var(--color-white);
			}

			&:disabled,
			&:disabled * {
				color: var(--color-white);
				opacity: 0.5;
				cursor: not-allowed;
				background: #a5a5a5;
			}
		}
	}
`;

export default FormFanMember;
