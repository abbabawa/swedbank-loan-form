import React from 'react';

import {Routes, Route} from 'react-router-dom'

import Intro from './pages/Intro';


import './css/style.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Question from './pages/Question';
import Summary from './pages/Summary';

const questions = [
	{
		text: "First Name",
		answer: "",
		input: "text"
	},
	{
		text: "Last Name",
		answer: "",
		input: "text"
	},
	{
		text: "Occupation",
		options: [{id: 0, name: "Select Occupation", value: ""}, {id: 1, name: "student", value: "student"}, {id: 2, name: "Self employed", value: "Self employed"}, {id: 3, name: "Business owner", value: "Business Owner"}],
		answer: "",
		input: "select"
	}
]

const getQuestion = (id)=>{console.log(id)
	return questions[id]
}

const setAnswer = (id, answer)=>{
	questions[id].answer = answer
}

function App() {
  return (
	<>
		<Navbar />
		<main className="main">
            <h1>Small loan application</h1>
			<div className='content'>
				<Routes>
					<Route path="/" element={<Intro />} />
					<Route path="/questions" element={<Question getQuestion={getQuestion} setAnswer={setAnswer} />} />
					<Route path="/summary" element={<Summary questions={questions} />} />
				</Routes>
			</div>
		</main>
		<Footer />
	</>
  );
}

export default App;
