import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faCaretDown, faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"


const Intro = ()=>{
    return (
        <>
            <div className="navigation">
                
                <div className="bar">
                
                </div>
                <div className="preferences">
                    <div>
                        <span>Private</span>
                        <span>Business</span>
                    </div>
                    <div className="lang">
                        <span>ENG</span>
                        <ul>
                            <li>LT</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
                <div className="menuBar">
                    <div>
                        <h2>SWEDBANK</h2>
                    </div>
                    <div className="userMenu">
                        <FontAwesomeIcon icon={faUserCircle} className="menuIcons" />
                        <FontAwesomeIcon icon={faBars} className="menuIcons" />
                    </div>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faHome}  /></li>
                            <li>Eceryday Banking</li>
                            <li>Cards</li>
                            <li>Loan, leasing</li>
                            <li>Savings, Investments</li>
                            <li>Pension</li>
                            <li>Insurance</li>
                            <li>
                                <input type="text" placeholder='search' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main className="main">
                <h1>Small loan application</h1>
                <div className='content'>
                    <div className="card">
                        <div className="title">
                            <h3 >If you are a swedbank customer</h3>
                        </div>
                        <article>
                            <p>It is best to complete your application while logged in, as many fields are previously completed. The application enables us to find the most suitable solution for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.</p>
                        </article>
                    </div>
                    <div className="card">
                        <div className="title two">
                            <h3>If you are a swedbank customer</h3>
                        </div>
                        <article>
                            <p>It is best to complete your application while logged in, as many fields are previously completed. The application enables us to find the most suitable solution for you and make you a personal loan offer. Completing an application does not oblige you to sign an agreement.</p>
                        </article>
                    </div>
                </div>
            </main>
            <footer>
                <div className="bar">
                </div>
                <div className="quickLinks">
                    <div>
                        <div className="footerLinkTitle">
                            <h3>Contacts </h3>
                        </div>
                        <ul>
                            <li><Link to={''} className='footerLinks' >Frequently Asked questions</Link></li>
                            <li><Link to={''} className='footerLinks' >Contacts and Branches</Link></li>
                            <li><Link to={''} className='footerLinks' >Book a consultant</Link></li>
                            <li><Link to={''} className='footerLinks' >About Swedbank</Link></li>
                        </ul>
                        <p>
                            Swedbank, AB
                            Konstitucijos pr. 20A, 03502 Vilnius, Lithuania<br />
                            SWIFT code: HABALT22 <br />
                            Legal entity code: 112029651
                        </p>
                    </div>
                    <div>
                        <div className="footerLinkTitle">
                            <h3>Useful Links </h3>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul>
                            <li><Link to={''} className='footerLinks' >Sustainability</Link></li>
                            <li><Link to={''} className='footerLinks' >Covid-19</Link></li>
                            <li><Link to={''} className='footerLinks' >Online banking</Link></li>
                            <li><Link to={''} className='footerLinks' >Prices and rates</Link></li>
                            <li><Link to={''} className='footerLinks' >Calculators</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className="footerLinkTitle">
                            <h3>Lagal Information </h3>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul>
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
                    <div>
                        <div className="footerLinkTitle">
                            <h3>Customer Programmes </h3>
                            <FontAwesomeIcon icon={faCaretDown} className="dropDownIcon" />
                        </div>
                        <ul>
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
                <div className='socialsContainer'>
                    <FontAwesomeIcon icon={faFacebook} className="socials" />
                    <FontAwesomeIcon icon={faInstagram} className="socials" />
                    <FontAwesomeIcon icon={faTwitter} className="socials" />
                    <FontAwesomeIcon icon={faYoutube} className="socials" />
                    <FontAwesomeIcon icon={faLinkedin} className="socials" />
                </div>
            </footer>
        </>
    )
}

export default Intro