import React from 'react';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import './App.scss';


function App() {
	return (
		<div className="App">
			<Header/>
			<Board/>
		</div>
	);
}

export default App;