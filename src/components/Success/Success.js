import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';
function Success() {
    return (
        <>
            <Header
            />
            <div className="success">
                <h3 className="success__title">
                    Заявка отправлена
                </h3>
                <p className="success__subtitle">
                    Ваше сообщение успешно доставлено. Мы свяжемся с Вами в ближайшее время.
                </p>
                <Link className="success__link" to="/">
                    Вернуться на главную страницу
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Success;