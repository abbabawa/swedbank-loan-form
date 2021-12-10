import React from 'react';

import {Routes, Route} from 'react-router-dom'

import Intro from './pages/Intro';


import './css/style.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Question from './components/Question';

function App() {
  return (
	<>
		<Navbar />
		<main className="main">
            <h1>Small loan application</h1>
			<div className='content'>
				<Routes>
					<Route path="/" element={<Intro />} />
					<Route path="/questions" element={<Question />} />
				</Routes>
			</div>
		</main>
		<Footer />
	</>
  );
}

export default App;
