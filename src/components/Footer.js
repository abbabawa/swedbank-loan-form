import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = ()=>{
    return (
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
    )
}

export default Footer