import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Main.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import About from './About/About';
import Device from './Device/Device';
import Calculator_4 from '../Calculator/Calculator_4';
import Calculator_5 from '../Calculator/Calculator_5';
import Calculator_6 from '../Calculator/Calculator_6';
import { NavLink } from 'react-router-dom';
import Сard from '../Сard/Сard';
import { More } from '../Catalog/More/More';
import { catalog_5 } from '../../constants/arrayPortfolio';
import {
    WIDTH_1280,
    WIDTH_768,
    WIDTH_540,
    NUMBER_OF_CARDS_OVER_1280,
    NUMBER_OF_CARDS_OVER_768,
    NUMBER_OF_CARDS_OVER_540,
    NUMBER_OF_CARDS_LESS_540,
    ADD_NUMBER_CARD_3,
    ADD_NUMBER_CARD_2,
    ADD_NUMBER_CARD_1,
} from '../../constants/index.js';
function Main({ onCalcbuy, onCalcb, onOrderbuy, type }) {
    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();

    const determiningCountCards = (width) => {
        if (width > WIDTH_1280) {
            setCounter(NUMBER_OF_CARDS_OVER_1280);
            return setMoreCard(ADD_NUMBER_CARD_3);
        } else if (width > WIDTH_768) {
            setCounter(NUMBER_OF_CARDS_OVER_768);
            return setMoreCard(ADD_NUMBER_CARD_2);
        }
        else if (width > WIDTH_540) {
            setCounter(NUMBER_OF_CARDS_OVER_540);
            return setMoreCard(ADD_NUMBER_CARD_1);
        }
        else setCounter(NUMBER_OF_CARDS_LESS_540);
        return setMoreCard(ADD_NUMBER_CARD_1);

    };

    useEffect(() => {
        const width = window.innerWidth;
        determiningCountCards(width);
    }, []);

    const addCounter = () => setCounter((...prev) => Number(prev) + moreCard);


    const [toggle, setToggle] = useState(true);
    const [toggles, setToggles] = useState(true);
    const [toggl, setToggl] = useState(true);
    useEffect(() => {
        setToggle(true);
        setToggles(false);
        setToggl(false);
    }, []);

    const onClickOpenMenu = () => {
        setToggle(true);
        setToggles(false);
        setToggl(false);
    };

    const onClickOpenMenus = () => {
        setToggles(true);
        setToggle(false);
        setToggl(false);
    };

    const onClickOpenMen = () => {
        setToggl(true);
        setToggle(false);
        setToggles(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };

    return (
        <>
            <Helmet>
                <title>Банные Чаны</title>
                <meta name="description" content="Банные Чаны купить, изготавление банных чаннов Челябинск" />
                <link rel="canonical" href="/" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
            </Helmet>
            <Header
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <section className='сatalog-card'>
                    <h2 className="main__title">Популярные комплектации</h2>
                    <ul className='catalog__elements'>
                        {type === 'all' ?
                            catalog_5.slice(0, counter).map((card, index) => {
                                return (
                                    <Сard key={index}
                                        card={card}
                                        onOrderbuy={onOrderbuy}
                                    />
                                );
                            })
                            : catalog_5.map((card, index) => {
                                return (
                                    <Сard key={index}
                                        card={card}
                                        onOrderbuy={onOrderbuy}
                                    />
                                );
                            })}
                    </ul>
                    <NavLink
                        to='/catalog'
                        className='main__link'
                    >
                        Перейти в каталог
                    </NavLink>

                    {type === 'all' && catalog_5.length > counter && (
                        <More addCounter={addCounter} />
                    )}

                </section>

                <Device />

                <section className='сatalog-card'>
                    <h2 className="сatalog__title">Выбери и рассчитай свою комплектацию</h2>
                    <div className='сatalog-button'>
                        <button className="card__buttons" onClick={onClickOpenMenu}>1750 мм. 2– 4 человека</button>
                        <button className="card__buttons" onClick={onClickOpenMenus}>2000 мм. 4–6 человека</button>
                        <button className="card__buttons" onClick={onClickOpenMen}>2350 мм. 6–8 человека</button>
                    </div>
                    {toggle
                        ? <Calculator_4 onCalcbuy={onCalcbuy}
                            onCalcb={onCalcb}

                        />
                        : null
                    }

                    {toggles
                        ? <Calculator_5 onCalcbuy={onCalcbuy} onCalcb={onCalcb} />
                        : null
                    }

                    {toggl
                        ? <Calculator_6 onCalcbuy={onCalcbuy} onCalcb={onCalcb} />
                        : null
                    }
                </section>

                <About />

            </main>
            <Footer />

        </>
    );
}

export default Main;