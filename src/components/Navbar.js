import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react/cjs/react.development'


const Navbar = ()=>{
    const [toggle, setToggle] = useState('hide')

    const toggleElement = (e)=>{
        setToggle(prev=>{
            return prev === 'hide' ? '' : 'hide'
        })
    }

    const showMenu = (e)=>{//console.log(e.target.parentNode.parentNode.children[2]);return
        let menu = e.target.parentNode.parentNode.children[2].children[0]
        if(menu.classList.contains('hide')){
            menu.classList.remove('hide')
        }else{
            menu.classList.add('hide')
        }
    }
    return (
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
    )
}

export default Navbar