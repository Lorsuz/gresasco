import React from 'react';

import styled from 'styled-components';
const HomeNavInfo = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<section className='contact'>
				<div>
					<i className='fa-solid fa-phone'></i>
					<span>+55 (43) 9 3421-7348</span>
				</div>
				<div>
					<i className='fa-solid fa-envelope'></i>
					<span>gresasc@academicos.com</span>
				</div>
			</section>
			<p>Siga-nos para ficar por dentro das novidades!</p>
			<section className='social-network'>
				<span>As Bruxas Estão Soltas!</span>
			</section>
		</div>
	</StyledComponent>
);

const StyledComponent = styled.section`
	background: var(--color-primary);
	height: 40px;
	width: 100%;

	* {
		color: #ffffff;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2%;

		> p {
			font-size: 0.8rem;

			&:hover {
				color: white;
			}
		}

		section {
			display: flex;

			&.contact {
				gap: 30px;

				div {
					display: flex;
					align-items: center;
					cursor: pointer;

					i {
						margin-right: 5px;
					}

					span {
						font-size: 0.8rem;
					}

					&:hover {
						i,
						span {
							color: white;
						}
					}
				}
			}

			&.social-network {
				display: flex;
				align-items: center;
				justify-content: center;

				span {
					margin-right: 15px;
					font-size: 0.8rem;
				}

				a {
					margin: 0 3px;

					i {
						font-size: 1.2rem;
					}

					&:hover {
						i {
							color: white;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
`;

export default HomeNavInfo;
