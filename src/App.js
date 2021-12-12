import { Route, Routes } from "react-router-dom"

import './css/index.css'
import Intro from "./pages/Intro"
import TestQuestion from "./pages/Question"
import Summary from './pages/Summary'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


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
		options: [
			{id: 0, name: "Select Occupation", value: ""}, 
			{id: 1, name: "student", value: "student"}, 
			{id: 2, name: "Self employed", value: "self_employed"}, 
			{id: 3, name: "Business owner", value: "business_owner"}
		],
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

const App = ()=>{
    return (
        <div>
            <Navbar />
            <div id="main">
                <div id="pageHeading">
                    <h1>Small Loan Application</h1>
                </div>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/questions" element={<TestQuestion getQuestion={getQuestion} setAnswer={setAnswer} maxQuestions={questions.length - 1} />} />
                        <Route path="/summary" element={<Summary questions={questions} />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App