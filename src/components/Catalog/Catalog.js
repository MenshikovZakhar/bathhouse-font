import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import Сard from '../Сard/Сard';
import { catalog_1 } from '../../constants/arrayPortfolio';
import { More } from './More/More';
import CatalogNav from './CatalogNav/CatalogNav';
import {
    WIDTH_1279,
    WIDTH_767,
    WIDTH_530,
    NUMBER_OF_CARDS_OVER_1279,
    NUMBER_OF_CARDS_OVER_767,
    NUMBER_OF_CARDS_OVER_530,
    NUMBER_OF_CARDS_LESS_530,
    ADD_NUMBER_CARD_3,
    ADD_NUMBER_CARD_2,
    ADD_NUMBER_CARD_1,
} from '../../constants/index.js';

function Catalog({ onOrderbuy, type }) {

    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();

    const determiningCountCards = (width) => {
        if (width > WIDTH_1279) {
            setCounter(NUMBER_OF_CARDS_OVER_1279);
            return setMoreCard(ADD_NUMBER_CARD_3);
        } else if (width > WIDTH_767) {
            setCounter(NUMBER_OF_CARDS_OVER_767);
            return setMoreCard(ADD_NUMBER_CARD_2);
        }
        else if (width > WIDTH_530) {
            setCounter(NUMBER_OF_CARDS_OVER_530);
            return setMoreCard(ADD_NUMBER_CARD_1);
        }
        else setCounter(NUMBER_OF_CARDS_LESS_530);
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
                        <h2 className="сatalog__title">Купель</h2>
                        <ul className='elements'>
                            {type === 'all' ?
                                catalog_1.slice(0, counter).map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })
                                : catalog_1.map((card, index) => {
                                    return (
                                        <Сard key={index}
                                            card={card}
                                            onOrderbuy={onOrderbuy}
                                        />
                                    );
                                })}
                        </ul>

                        {type === 'all' && catalog_1.length > counter && (
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