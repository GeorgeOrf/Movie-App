
import '../styles/NavBar.css'

import brandLogo from '../assets/bruh.png'

import { useEffect, useState } from 'react'
const NavBar = () => {

    const [envHeight, setEnvHeight] = useState(25);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 500;
            const newHeight = Math.max(0, 25 - (scrollTop / maxScroll) * 5);
            setEnvHeight(newHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const envelopeStyle = {
        height: `${envHeight}px`,
        width: '100%',
        backgroundColor: 'rgb(202, 220, 236)',
        position: 'fixed',
        top: '0',
        zIndex: '4',
        transition: 'height 0.3s ease',
    };

    const logoStyle = {
         position: 'fixed', 
        top: '10px',        
        left: '15px',
        width: '45px',
        height: '45px',
        zIndex: 5, 
    };

    return (
        <>
        <div style={envelopeStyle}></div>
        <img src={brandLogo} alt="Website logo" style={logoStyle}/>
        <div className='outerNavCont'>
            <img src='' alt=''/>
            <ul className='navCont'>
                <li className='navItem'>Home</li>
                <li className='navItem'>About</li>
                <li className='navItem'>Sign-in</li>
            </ul>
        </div>
        </>
    )
}
export default NavBar