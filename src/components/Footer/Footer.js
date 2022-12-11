import './Footer.css'
import telegram from '../../images/telegram_2.svg';
import phone from '../../images/phone_2.png';
import whatsapp from '../../images/whatsapp_2.svg';
import location from '../../images/location.png';
import email from '../../images/email.png';

function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>
                © 2022 xxxxxxxxxxxx
            </h1>
            <div className='footer__info'>
                <div className='footer__address'>
                    <p className='footer__year'><img className='iqon__location' src={location} alt='logo' />Челябинск, xxxxxxxx</p>
                    <p className='footer__year'><img className='iqon__email' src={email} alt='logo' />xxxxxxxxx@mail.ru</p>
                    <p className='footer__year'><img className='iqon__email' src={phone} alt='logo' />+7(951)484-00-77</p>
                </div>
                <ul className='footer__list'>

                    <li className='footer__list-item'>
                        <a href="tel:+79514840077">
                            <img className='iqon__logo' src={phone} alt='logo' />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={whatsapp} alt='logo' />
                        </a>
                    </li>

                    <li className='footer__list-item'>
                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={telegram} alt='logo' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;