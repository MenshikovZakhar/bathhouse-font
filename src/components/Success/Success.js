import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <>
            <Header
            />
            <div className="page-notfound">
                <h3 className="notfound__title">
                    Заявка отправлена
                </h3>
                <p className="notfound__subtitle">
                    'Ваше сообщение успешно доставлено. Мы свяжемся с Вами в ближайшее время.'
                </p>
                <Link className="notfound__link" to="/">
                    Вернуться на главную
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Success;