import { Link } from "react-router-dom"

const TestIntro = ()=>{
    return (
        <div className="intro">
                    <div className="card">
                        <div className="card-title" id="card-title-one">
                            <h3>If you are a Swedbank customer</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                It is best to complete your application while logged in, as many fields are previously completed. 
                                The application enables us to find the most suitable solution for you and make you a personal loan offer. 
                                Completing an application does not oblige you to sign an agreement.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title" id="card-title-two">
                            <h3>If you are not a Swedbank customer</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                It is best to complete your application while logged in, as many fields are previously completed. 
                                The application enables us to find the most suitable solution for you and make you a personal loan offer. 
                                Completing an application does not oblige you to sign an agreement.
                            </p>
                            <Link to="/questions">Complete An application</Link>
                        </div>
                    </div>
        </div>
    )
}

export default TestIntro