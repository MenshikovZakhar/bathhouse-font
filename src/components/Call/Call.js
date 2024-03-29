import './Call.css';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import telegram from '../../images/telegram.svg';

import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';
import { Preloader } from '../Preloader/Preloader';

import React from 'react';
import emailjs from 'emailjs-com';
import {
    MESSAGE,
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../../constants/index';
import success from '../../images/success.png';
import error from '../../images/error.png';


export default function Call({ isOpen, onClose }) {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });


    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
    const [imgAcceptAuth, setImgAcceptAuth] = useState('');

    function onclick() {
        window.location.assign('http://chel-chan.ru/success');
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7tu4f99', 'template_mnqmt2q', e.target, 'cQDdPgqtnpmidoMjc')
            .then((response) => {
                window.location.reload()
                console.log('SUCCESS!', response.status, response.text);
                onclick()
            }).catch((err) => {
                console.log('FAILED...', err);
                setMessageAcceptAuth(NOT_FOUND_MESSAGE);
                setImgAcceptAuth(error);
            });
        setEmailjsOpen(true)
    }

    const handleChange = (e) => {

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
                    <p className='emailjs__text'>Мы свяжемся с Вами в ближайшее время.</p>
                    <form onSubmit={sendEmail} className="emailjs__form">

                        <input
                            className='emailjs__input'
                            type='text'
                            name='name'
                            placeholder='Введите Ваше Имя'
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
                            onChange={handleChange}
                            pattern="^((8|\+7)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$"
                            required
                        />
                        <span className="register__error auth__error">{errors.phone}</span>
                        <input className='emailjs__input_1' type="text" name="product" defaultValue={MESSAGE} />

                        <button disabled={!isFormValid} type="submit"
                            className={`register__submit-button auth__submit-button ${isFormValid ? '' : 'auth__submit-button_disabled'}`}>
                            Заказать</button>

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





