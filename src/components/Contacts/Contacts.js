import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Maps from './Map/Map';
import telegram from '../../images/telegram.svg';
import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';
import location_1 from '../../images/location-1.svg';
import location_2 from '../../images/location-2.png';
import location_3 from '../../images/location-3.svg';
import location_4 from '../../images/location-4.svg';
import './Contacts.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Contacts({ onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Контакты</title>
                <meta name="description" content="Телефон, Адрес, Режим работы" />
                <link rel="canonical" href='/contacts' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='contacts'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <div className='map__description'>


                    <h2 className="map__title">Контакты</h2>

                    <div className="map__conteiner">
                        <div className="map__box">
                            <img className='map__iqons' src={location_1} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Адрес</h3>
                                <span className="contacts__name">г. Челябинск, ул. Троицкий тракт, д.21</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_2} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Телефон</h3>
                                <span className="contacts__name">+7(951)465-25-20</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_3} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Режим работы</h3>
                                <span className="contacts__name">Пн-Пт: с 9-00 до 18-00</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_4} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">E-mail</h3>
                                <span className="contacts__name">xxxxxxxxx@mail.ru</span>
                            </div>
                        </div>
                    </div>
                    <div className='contacts__communication'>
                        <a href="tel:+79514652520">
                            <img className='contacts__logo' src={phone} alt='logo' />
                        </a>
                        <a href="https://wa.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={whatsapp} alt='logo' />
                        </a>
                        <a href="https://t.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={telegram} alt='logo' />
                        </a>
                    </div>
                </div>
                <div className='maps'>
                    <Maps />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;