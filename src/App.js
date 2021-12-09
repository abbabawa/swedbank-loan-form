import React from 'react';

import {Routes, Route} from 'react-router-dom'

import Intro from './pages/Intro';


import './css/style.css'

function App() {
  return (
	  <Routes>
		  <Route path="/" element={<Intro />} />
	  </Routes>
    
  );
}

export default App;
