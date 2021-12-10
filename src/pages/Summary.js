const Summary = (props)=>{
    return (
        <div>
            <div>
                <h4>Summary</h4>
            </div>
            <div>
                <ol>
                    {
                        props.questions.map(question=>{
                            return <li key={question.id}>{question.text}: {question.answer.replace("_", " ")}</li>
                        })
                    }
                </ol>
            </div>
            <div className="buttonDiv">
                <button className="prev">Previous</button>
                <button className="submitAppBtn">Submit Application</button>
            </div>
        </div>
    )
}

export default Summary