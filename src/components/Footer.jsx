
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const currentYear = new Date();

    return(
        <>
            <footer>
                <div className='footerCont'>
                    <h4><FontAwesomeIcon icon={faCopyright} /> - Movie App by George Orfanidis - {currentYear.getFullYear()}</h4>
                </div>
            </footer>
        </>
    )
}
export default Footer