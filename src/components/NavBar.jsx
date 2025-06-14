
import '../styles/NavBar.css'

import brandLogo from '../assets/bruh.png'
import hamburger from '../assets/hamburgerMenu.svg'

import { useState } from 'react'
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='hamburgerCont'>
                <img src={brandLogo} alt="Website logo" className='logo'/>
                <button className='hamburger' onClick={toggleMenu}>
                    <img src={hamburger} alt="Hamburger menu button" />
                </button> 

                <nav>
                    <ul className={`menu ${isOpen ? 'open' : ''}`}>
                        <li className='navItem'><a href="#">Home</a></li>
                        <li className='navItem'><a href="#">About</a></li>
                        <li className='navItem'><a href="#">Contact</a></li>
                        <li className='navItem'><a href="#">Sign-in</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )

}
export default NavBar