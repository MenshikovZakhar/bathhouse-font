import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import Сard from '../Сard/Сard';
import { catalog_2 } from '../../constants/arrayPortfolio';
import { catalog_3 } from '../../constants/arrayPortfolio';
import { catalog_4 } from '../../constants/arrayPortfolio';
import { More } from './More/More';
import CatalogNav from './CatalogNav/CatalogNav';
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

function Catalog({ onOrderbuy, type }) {

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
    return (
        <>
            <Helmet>
                <title>Каталог банных чанов</title>
                <meta name="description" content="Каталог банных чанов" />
                <link rel="canonical" href='/сatalog' />
            </Helmet>
            <Header

            />
            <main className='сatalog'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <>
                    <CatalogNav />
                </>
                <>
                    <section className='сatalog-card'>
                        <h2 className="сatalog__title"> Купель на подставке</h2>
                        <ul className='catalog__elements'>
                            {type === 'all' ?
                                catalog_2.slice(0, counter).map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })
                                : catalog_2.map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })}
                        </ul>

                        {type === 'all' && catalog_2.length > counter && (
                            <More addCounter={addCounter} />
                        )}

                    </section>


                    <section className='сatalog-card'>
                        <h2 className="сatalog__title">Купель c печью</h2>
                        <ul className='catalog__elements'>
                            {type === 'all' ?
                                catalog_4.slice(0, counter).map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })
                                : catalog_4.map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })}
                        </ul>

                        {type === 'all' && catalog_2.length > counter && (
                            <More addCounter={addCounter} />
                        )}

                    </section>

                    <section className='сatalog-card'>
                        <h2 className="сatalog__title">Купель с лестницей</h2>
                        <ul className='catalog__elements'>
                            {type === 'all' ?
                                catalog_3.slice(0, counter).map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })
                                : catalog_2.map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })}
                        </ul>

                        {type === 'all' && catalog_2.length > counter && (
                            <More addCounter={addCounter} />
                        )}

                    </section>
                </>

            </main>
            <Footer />
        </>
    );
}

export default Catalog;