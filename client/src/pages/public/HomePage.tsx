import React from 'react';
import Layout from '../../layouts/PagesLayout';
import styled from 'styled-components';

import HomeCover from '../../components/sections/HomeCover';
import HomeBanner from '../../components/sections/HomeBanner';
import HomeDetails from '../../components/sections/HomeDetails';
import HomePlot from '../../components/sections/HomePlot';
import HomeAboutSchool from '../../components/sections/HomeAboutSchool';
import HomeSponsors from '../../components/sections/HomeSponsors';
import HomeContact from '../../components/sections/HomeContact';
import HomeNavInfo from '../../components/sections/HomeNavInfo';

const HomePage: React.FunctionComponent = () => (
	<Layout title='Home Page'>
		<StyledHomePage>
			<HomeCover />
			<HomeNavInfo />
			<HomeBanner />
			<HomePlot />
			<HomeSponsors />
			<HomeDetails />
			<HomeAboutSchool />
			<HomeContact />
		</StyledHomePage>
	</Layout>
);

const StyledHomePage = styled.main`
	width: 100%;

	@media screen {
		@media (max-width: 1350px) {
			main {
				.cover {
					.wrapper > div {
						&.left {
							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 3.5rem;
								}

								p {
									font-size: 1rem;
								}
							}
						}
					}
				}
			}
		}

		@media (max-width: 1200px) {
			main {
				.cover {
					.wrapper > div {
						&.left {
							grid-column: 2/8;

							.container {
								p {
									width: 90%;
								}
							}
						}

						&.right {
							grid-column: 9/12;

							.img {
								width: 100%;

								img {
									width: 150%;
								}
							}
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			main {
				.cover .wrapper {
					> div {
						&.left {
							grid-column: 2/8;

							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 3rem;
								}
							}
						}

						&.right {
							grid-column: 9/12;

							.img {
								width: 100%;

								img {
									width: 150%;
								}
							}
						}
					}
				}

				.details {
					ul {
						grid-template-columns: repeat(2, 1fr);
						gap: 100px 150px;
					}
				}
			}

			main .banner {
				height: 600px;
			}

			main .about-school .wrapper .text-container {
				grid-column: 2/12;
				margin-bottom: 150px;
			}

			main .about-school .wrapper .img-container {
				grid-column: 2/12;
			}

			main > .contact .wrapper > .text {
				grid-column: 2/12;
				margin-bottom: 100px;
			}

			main > .contact .wrapper > .form {
				grid-column: 2/12;
			}
		}

		@media (max-width: 1100px) {
			main {
				.plot .wrapper {
					margin-bottom: 50px;

					.description {
						grid-column: 2/12;
						margin-bottom: 70px;
					}

					.disc-cover,
					.audio {
						grid-column: 2/12;
					}
				}
			}
		}

		@media (max-width: 880px) {
			main {
				.cover .wrapper {
					> div {
						&.left {
							grid-column: 2/12;

							.container {
								h2 {
									font-size: 2rem;
								}

								h1 {
									font-size: 2.8rem;
								}

								p {
									width: 100%;
								}

								> a {
									padding: 15px 50px;
									font-size: 1.1rem;
								}

								.social-links {
									display: flex;
								}
							}
						}

						&.right {
							display: none;
						}
					}
				}

				.nav-info {
					justify-content: space-evenly;

					p {
						display: none;
					}
				}
			}
		}

		@media (max-width: 650px) {
			main {
				.nav-info .wrapper {
					section {
						&.contact {
							width: 100%;
							justify-content: space-evenly;
						}

						&.social-network {
							display: none;
						}
					}
				}

				.banner {
					height: 400px;
					margin-bottom: 80px;
				}

				.sponsors {
					h1 {
						font-size: 1.5rem;
					}
				}

				.details {
					ul {
						grid-template-columns: repeat(1, 1fr);
						gap: 100px 0;
					}
				}
			}
		}

		@media (max-width: 370px) {
			main {
				.nav-info .wrapper {
					section {
						&.contact {
							div:nth-child(2) {
								display: none;
							}
						}
					}
				}
			}
		}
	}
`;

export default HomePage;
