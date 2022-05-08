import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { store } from './Redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />
				<Main />
			</div>
		</Provider>
	);
}

export default App;
