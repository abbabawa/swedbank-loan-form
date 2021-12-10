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
                    <div className='menuLinks'>
                        <ul>
                            <li><Link to=""><FontAwesomeIcon icon={faHome}  /></Link></li>
                            <li><Link to="">Eceryday Banking</Link></li>
                            <li><Link to="">Cards</Link></li>
                            <li><Link to="">Loan, leasing</Link></li>
                            <li><Link to="">Savings, Investments</Link></li>
                            <li><Link to="">Pension</Link></li>
                            <li><Link to="">Insurance</Link></li>
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