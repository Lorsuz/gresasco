import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../shared/SocialMedia';
import LogoPng from '../../assets/images/Logo/santa-cruz-logo-removebg-preview.png';

import styled from 'styled-components';

const HomeCover = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<div className='left'>
				<div className='container'>
					<h2>Grêmio Recreativo Escola de Samba</h2>
					<h1>Acadêmicos de Santa Cruz</h1>
					<p>
						Bem-vindos! Aqui o samba é vida, a cultura é paixão e a alegria é eterna. No coração de Santa Cruz, encontre
						a felicidade em cada batida de tambor. Feliz da vida é quem tem a Santa Cruz no coração.
					</p>
					<Link to='/not-found'>
						<span>Ir para Loja</span>
					</Link>
					<div className='social-midia'>
						<SocialMedia />
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='img'>
					<img src={LogoPng} alt='Logo' />
				</div>
				<div className='social-midia'>
					<SocialMedia />
				</div>
			</div>
		</div>
	</StyledComponent>
);

const StyledComponent = styled.section`
	height: 98dvh;
	min-height: 700px;
	max-height: 1200px;

	.wrapper > div {
		&.left {
			grid-column: 2/7;
			align-items: center;
			display: flex;
			justify-content: center;

			.container {
				h2 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 2.5rem;
				}

				h1 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 4rem;
					margin-bottom: 20px;
				}

				p {
					color: var(--color-text-soft);
					font-size: 1.1rem;
					margin-bottom: 50px;
				}

				span {
					background: var(--color-primary-soft);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 10px 50px;
					margin-bottom: 25px;

					&:hover {
						background: var(--color-primary);
						border-radius: 0px 10px;
					}
				}

				.social-midia {
					display: none;
				}
			}
		}

		&.right {
			grid-column: 8/12;

			.img {
				align-items: center;
				display: flex;
				justify-content: center;
				margin-bottom: 0px;

				img {
					width: 450px;
				}
			}
			.social-midia{

			}
		}
	}
`;

export default HomeCover;
