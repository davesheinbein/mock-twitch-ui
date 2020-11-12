import React from 'react';
// components
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// styles
import './style/App.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
		</div>
	);
}

export default App;
