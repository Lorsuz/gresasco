import React from 'react';
import AuthContext from './context/AuthContext';
import Layout from './layouts/MainLayout';

import Router from './router/Router';
import ButtonBackToTop from './components/shared/ButtonBackToTop';

function App(): React.FunctionComponentElement<JSX.Element> {
	const [token, setToken] = React.useState<string>('');

	const authContext: {
		apiUrl: string;
		token: string;
		setToken: React.Dispatch<React.SetStateAction<string>>;
	} = {
		apiUrl: 'http://localhost:3001/api',
		token,
		setToken
	};

	return (
		<AuthContext.Provider value={authContext}>
			<Layout title='index'>
				<Router />
			</Layout>
			<ButtonBackToTop></ButtonBackToTop>
		</AuthContext.Provider>
	);
}

export default App;
