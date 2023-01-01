import Header from '../Header/Header';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
import { More } from '../Catalog/More/More';
import { portfolio } from '../../constants/arrayPortfolio';
import './Portfolio.css';
import {
    WIDTH_1279,
    WIDTH_767,
    WIDTH_530,
    NUMBER_OF_CARDS_OVER_1279,
    NUMBER_OF_CARDS_OVER_767,
    NUMBER_OF_CARDS_OVER_550,
    NUMBER_OF_CARDS_LESS_550,
    ADD_NUMBER_CARD_3,
    ADD_NUMBER_CARD_2,
    ADD_NUMBER_CARD_1,
} from '../../constants/index.js';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Portfolio({ onCardClick, type }) {

    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();
    const determiningCountCards = (width) => {
        if (width > WIDTH_1279) {
            setCounter(NUMBER_OF_CARDS_OVER_1279);
            return setMoreCard(ADD_NUMBER_CARD_2);
        } else if (width > WIDTH_767) {
            setCounter(NUMBER_OF_CARDS_OVER_767);
            return setMoreCard(ADD_NUMBER_CARD_2);
        }
        else if (width > WIDTH_530) {
            setCounter(NUMBER_OF_CARDS_OVER_550);
            return setMoreCard(ADD_NUMBER_CARD_1);
        }
        else setCounter(NUMBER_OF_CARDS_LESS_550);
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
                <title>Портфолио работ</title>
                <meta name="description" content="Примеры работ" />
                <link rel="canonical" href='/portfolio' />
            </Helmet>
            <Header />
            <main className='portfolio'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />

                <section className='portfolio-card'>
                    <h1 className="about__title">Наши работы</h1>
                    <ul className='portfolio__elements'>
                        {type === 'all'
                            ? portfolio.slice(0, counter).map((image, index) => {
                                return (

                                    <Image key={index}
                                        image={image}
                                        onCardClick={onCardClick} />
                                );
                            })
                            : portfolio.map((image, index) => {
                                return (
                                    <Image key={index}
                                        src={image.src}
                                        image={image}
                                        onCardClick={onCardClick}
                                    />
                                );
                            })}
                    </ul>
                    {type === 'all' && portfolio.length > counter && (
                        <More addCounter={addCounter} />
                    )}
                </section>

            </main>
            <Footer />
        </>
    );
}

export default Portfolio;