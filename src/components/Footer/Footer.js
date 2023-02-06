import './Footer.css'
import telegram from '../../images/telegram_2.svg';
import phone from '../../images/phone_2.png';
import phone_2 from '../../images/phone_3.png';
import whatsapp from '../../images/whatsapp_2.svg';
import location from '../../images/location.png';
import email from '../../images/email.png';

function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>
                © 2022 XXXXXXXXXXXXXXXX
            </h1>
            <div className='footer__info'>
                <div className='footer__address'>
                    <p className='footer__year'><img className='iqon__location' src={location} alt='logo' />Челябинск, Троицкий тракт 21</p>
                    <p className='footer__year'><img className='iqon__email' src={email} alt='logo' />xxxxxxxxx@mail.ru</p>
                    <p className='footer__year'><img className='iqon__phone' src={phone_2} alt='logo' />+7(951)465-25-20</p>
                </div>
                <ul className='footer__list'>

                    <li className='footer__list-item'>
                        <a href="tel:+79514652520">
                            <img className='iqon__logo' src={phone} alt='logo' />
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a href="https://wa.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={whatsapp} alt='logo' />
                        </a>
                    </li>

                    <li className='footer__list-item'>
                        <a href="https://t.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='iqon__logo' src={telegram} alt='logo' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;