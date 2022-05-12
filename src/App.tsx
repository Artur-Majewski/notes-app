import { Provider } from 'react-redux';
import { Header } from './components/organisms/Header/Header';
import { Main } from './components/organisms/Main/Main';
import { store } from './Redux/store';
import './App.css';

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
