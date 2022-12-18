import './Emailjs.css';
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';
import telegram from '../../images/telegram.svg';
import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';
import { Preloader } from '../Preloader/Preloader';
import {
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../../constants/index';
import success from '../../images/success.png';
import error from '../../images/error.png';
function Emailjs({ isOpen, onClose, }) {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });
    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
    const [imgAcceptAuth, setImgAcceptAuth] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ap6gpqg',
            'template_ity9nob',
            toSend,
            'Z6le3YMDE9ovmwfTV'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageAcceptAuth(SAVE_MOVIE_MESSAGE);
                setImgAcceptAuth(success);
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setMessageAcceptAuth(NOT_FOUND_MESSAGE);
                setImgAcceptAuth(error);
            });

        setToSend('');
        setEmailjsOpen(true)
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsFormValid(e.target.closest('form').checkValidity());
        setImgAcceptAuth("")
        setMessageAcceptAuth("");
        setIsLoading(false);
    };

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
            setEmailjsOpen(false)
        }
    };

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    return (
        <div className={classPopup} onMouseDown={handleMouseDown}>
            {isEmailjsOpen ? (<div className="emailjs__message"> <h2 className='emailjs__title_2'>{messageAcceptAuth}</h2>
                {isLoading ? null :
                    <Preloader />
                }
                <img onLoad={() => setIsLoading(true)} style={isLoading ? {} : { display: 'none' }} className="info-image" src={imgAcceptAuth} alt="Отправках" /></div>) :
                (<div className="emailjs">
                    <h2 className='emailjs__title'>Оставьте Вашу заявку.</h2>
                    <p className='emailjs__text'>Я свяжусь с Вами в ближайшее время.</p>
                    <form onSubmit={onSubmit} className="emailjs__form">
                        <input
                            className='emailjs__input'
                            type='text'
                            name='name'
                            placeholder='Введите Ваше Имя'
                            value={toSend.name || ''}
                            onChange={handleChange}
                            pattern="[а-яА-Яa-zA-ZёË\- ]{2,}"
                            required
                        />
                        <span className="register__error auth__error">{errors.name}</span>

                        <input
                            className='emailjs__input'
                            type="tel"
                            name='phone'
                            placeholder='Введите Ваш телефон'
                            value={toSend.phone || ''}
                            onChange={handleChange}
                            pattern="[0-9]{11}"
                            required
                        />
                        <span className="register__error auth__error">{errors.phone}</span>
                        <textarea
                            className='emailjs__textarea'
                            type='text'
                            name='message'
                            value={toSend.message || ''}
                            onChange={handleChange}
                            placeholder='Укажите желаемый вид, оказываемых услуг, время и удобную для Вас дату'
                        />
                        <button disabled={!isFormValid} type="submit"
                            className={`register__submit-button auth__submit-button ${isFormValid ? '' : 'auth__submit-button_disabled'}`}>
                            Отправить</button>

                        <p className='emailjs__text_2'>Также для связи с нами Вы можете воспользоваться любым из доступных способов.</p>
                        <div className='emailjs__iqons'>
                            <a href="tel:+79514840077">
                                <img className='iqons__logo' src={phone} alt='logo' />
                            </a>
                            <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                                <img className='iqons__logo' src={whatsapp} alt='logo' />
                            </a>
                            <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                                <img className='iqons__logo' src={telegram} alt='logo' />
                            </a>
                        </div>
                    </form>

                </div>)
            }

            <button
                aria-label='Close'
                className='emailjs__close'
                type='button'
                onClick={() => { setEmailjsOpen(false); onClose(false) }}
            ></button>

        </div>
    );
}

export default Emailjs;