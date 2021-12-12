import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars, faCaretDown, faHome, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Route, Routes } from "react-router-dom"

import '../css/index.css'
import TestIntro from "./TestIntro"
import TestQuestion from "./TestQuestion"
import Summary from './Summary'


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

const Temp = ()=>{
    return (
        <div>
            <div id="navbar">
                <div className="hbar"></div>
                <div id="settings">
                    <div id="type">
                        <span>Private</span>
                        <span>Business</span>
                    </div>
                    <div>
                        <span onClick={toggleElement}>EN</span>
                        <ul className={toggle}>
                            <li><Link to="" className='langLink'>LT</Link></li>
                            <li><Link to="" className='langLink'>English</Link></li>
                        </ul>
                    </div>
                </div>
                <div id="menubar">
                    <div>
                        <h3>SWEDBANK</h3>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} className="menuIcons" />
                        <FontAwesomeIcon icon={faBars} className="menuIcons" onClick={showMenu} />
                    </div>
                    <div className='menuLinks'>
                        <ul className='hide'>
                            <li ><Link to="" className='link icon'><FontAwesomeIcon icon={faHome}  /></Link></li>
                            <li className='menuItem'><Link to="" className='link'>Everyday Banking</Link></li>
                            <li className='menuItem'><Link to="" className='link'>Cards</Link></li>
                            <li className='menuItem'><Link to="" className='link'>Loan, leasing</Link></li>
                            <li className='menuItem'><Link to="" className='link'>Savings, Investments</Link></li>
                            <li className='menuItem'><Link to="" className='link'>Pension</Link></li>
                            <li className='menuItem'><Link to="" className='link'>Insurance</Link></li>
                            <li className='icon'>
                                <input type="text" placeholder='search' id="searchInput" />
                                <FontAwesomeIcon icon={faSearch} id="searchIcon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="main">
                <div id="pageHeading">
                    <h1>Small Loan Application</h1>
                </div>
                <div id="content">
                    <Routes>
                        <Route path="/" element={<TestIntro />} />
                        <Route path="/questions" element={<TestQuestion getQuestion={getQuestion} setAnswer={setAnswer} maxQuestions={questions.length - 1} />} />
                        <Route path="/summary" element={<Summary questions={questions} />} />
                    </Routes>
                </div>
            </div>
            <div id="footer">
                <div className="hbar"></div>
                <div id="quickLinks">
                    <div className="link-col">
                        <div className="quickLinkTitle">
                            <h4>Contacts</h4>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul>
                            <li>
                                <Link to='' className='footerLinks'>Frequently Asked questions</Link>
                            </li>
                            <li>
                                <Link to='' className='footerLinks'>Contacts and Branches</Link>
                            </li>
                            <li>
                                <Link to='' className='footerLinks'>Book a consultant</Link>
                            </li>
                            <li>
                                <Link to='' className='footerLinks'>About Swedbank</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="link-col">
                        <div className="quickLinkTitle">
                            <h4>Contacts</h4>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul className="hide">
                            <li><Link to={''} className='footerLinks' >Sustainability</Link></li>
                            <li><Link to={''} className='footerLinks' >Covid-19</Link></li>
                            <li><Link to={''} className='footerLinks' >Online banking</Link></li>
                            <li><Link to={''} className='footerLinks' >Prices and rates</Link></li>
                            <li><Link to={''} className='footerLinks' >Calculators</Link></li>
                        </ul>
                    </div>
                    <div className="link-col">
                        <div className="quickLinkTitle">
                            <h4>Contacts</h4>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul className="hide">
                            <li><Link to={''} className='footerLinks' >Terms and conditions</Link></li>
                            <li><Link to={''} className='footerLinks' >User terms</Link></li>
                            <li><Link to={''} className='footerLinks' >Processing of personal Data</Link></li>
                            <li><Link to={''} className='footerLinks' >Handling customer claims</Link></li>
                            <li><Link to={''} className='footerLinks' >Cookies</Link></li>
                            <li><Link to={''} className='footerLinks' >Deposit and liability insurance for investors</Link></li>
                            <li><Link to={''} className='footerLinks' >Payment service directive</Link></li>
                            <li><Link to={''} className='footerLinks' >Prevention of money laundering</Link></li>
                        </ul>
                    </div>
                    <div className="link-col">
                        <div className="quickLinkTitle">
                            <h4>Contacts</h4>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul className="hide">
                            <li><Link to={''} className='footerLinks' >Swedbank's youth programme</Link></li>
                            <li><Link to={''} className='footerLinks' >For parents of children and youth</Link></li>
                            <li><Link to={''} className='footerLinks' >For Salary receivers</Link></li>
                            <li><Link to={''} className='footerLinks' >Golden programmes</Link></li>
                            <li><Link to={''} className='footerLinks' >Private banking</Link></li>
                            <li><Link to={''} className='footerLinks' >Senior Programmes</Link></li>
                            <li><Link to={''} className='footerLinks' >Become a business customer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="socialsContainer">
                    <FontAwesomeIcon icon={faFacebook} className="socials" />
                    <FontAwesomeIcon icon={faInstagram} className="socials" />
                    <FontAwesomeIcon icon={faTwitter} className="socials" />
                    <FontAwesomeIcon icon={faYoutube} className="socials" />
                    <FontAwesomeIcon icon={faLinkedin} className="socials" />
                </div>
            </div>
        </div>
    )
}

export default Temp