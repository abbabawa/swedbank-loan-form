const Question = ()=>{
    return (
        <div className="question">
            <div className="errorMessage">

            </div>
            <div>
                <label>First Name</label>
                <div className="inputDiv">
                    <input type="text" name="" />
                </div>
            </div>
            <div className="buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Question