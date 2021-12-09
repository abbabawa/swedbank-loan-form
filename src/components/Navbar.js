import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons'


const Navbar = ()=>{
    return (
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
    )
}

export default Navbar