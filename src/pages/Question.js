import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput"

const Question = (props)=>{

    const [num, setNum] = useState(-1)
    const [message, setMessage] = useState('')
    const [question, setQuestion] = useState({
		text: "",
		answer: "",
		input: ""
	})
    const navigate = useNavigate()

    useEffect(()=>{
        nextQuestion()
    }, [])

    const nextQuestion = ()=>{
        if(num >= props.maxQuestions){
            navigate('/summary')
        }
        if(question.answer === '' && question.text !== ''){
            setMessage('Sorry you must provide the required data before proceeding')
            return
        }
        setNum((prev)=>{
            if(prev < props.maxQuestions){
                let obj = props.getQuestion(++prev)
                if(obj){console.log(num, obj)
                    setQuestion(obj)
                }
                return prev
            }
            return props.maxQuestions
        });
        setMessage('')
    }

    const prevQuestion = ()=>{
        setNum((prev)=>{
            if(prev > 0){
                let obj = props.getQuestion(--prev)
                if(obj)
                    setQuestion(obj)
                return prev
            }
            return 0
        })
    }

    const handleChange = (e)=>{
        setQuestion(prev=>{
            return {
                ...prev,
                answer: e.target.value
            }
        })
        props.setAnswer(num, e.target.value)
    }
    return (
        <div className="question">
            <div className="errorMessage">
                <h3>{message}</h3>
            </div>
            <div>
                <label>{question.text}</label>
                <div className="inputDiv">
                    <FormInput type={question.input} value={question.answer} handleChange={handleChange} options={question.options} />
                </div>
            </div>
            <div className="buttonDiv">
                <button onClick={prevQuestion} className="prev">Previous</button>
                <button onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )
}

export default Question