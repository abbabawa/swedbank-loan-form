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
		id: 0,
		text: "First Name",
		answer: "",
		input: "text"
	},
	{
		id: 1,
		text: "Last Name",
		answer: "",
		input: "text"
	},
	{
		id: 2,
		text: "Occupation",
		options: [{id: 0, name: "Select Occupation", value: ""}, {id: 1, name: "student", value: "student"}, {id: 2, name: "Self employed", value: "self_employed"}, {id: 3, name: "Business owner", value: "business_owner"}],
		answer: "",
		input: "select"
	},
	{
		id: 3,
		text: "Name Of Employer",
		answer: "",
		input: "text",
		dependsOn: 2,
		options: {student: {input: 'readonly', answer: 'Not applicable'}, self_employed: {input: 'text', answer: ''}, business_owner: {input: 'text', answer: ''}}
	}
]

const getQuestion = (id)=>{
	if(questions[id].dependsOn){
		let depend = questions[questions[id].dependsOn];
		let inputType = questions[id].options[depend.answer];
		questions[id].answer = inputType.answer ? inputType.answer : questions[id].answer
		return {
			text: questions[id].text,
			answer: questions[id].answer,
			input: inputType.input
		}
	}
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
					<Route path="/questions" element={<Question getQuestion={getQuestion} setAnswer={setAnswer} maxQuestions={questions.length - 1} />} />
					<Route path="/summary" element={<Summary questions={questions} />} />
				</Routes>
			</div>
		</main>
		<Footer />
	</>
  );
}

export default App;
