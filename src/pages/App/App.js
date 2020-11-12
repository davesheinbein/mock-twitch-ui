import React from 'react';
// components
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Body from '../../components/Body/Body';
// styles
import './style/App.css';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app__main'>
				<Sidebar />
				<Body />
			</div>
		</div>
	);
}

export default App;
