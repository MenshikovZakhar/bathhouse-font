import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Main.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import About from './About/About';
import Calculator_1 from '../Calculator/Calculator_1';
import Calculator_2 from '../Calculator/Calculator_2';
import Calculator_3 from '../Calculator/Calculator_3';
function Main({ onCalcbuy, onCalcb }) {

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

                <About />
                <section className='сatalog-card'>
                    <h2 className="сatalog__title">Выбери и рассчитай свою комплектацию</h2>
                    <div className='сatalog-button'>
                        <button className="card__buttons" onClick={onClickOpenMenu}>1750 мм. 2– 4 человека</button>
                        <button className="card__buttons" onClick={onClickOpenMenus}>2000 мм. 4–6 человека</button>
                        <button className="card__buttons" onClick={onClickOpenMen}>2350 мм. 6–8 человека</button>
                    </div>
                    {toggle
                        ? <Calculator_1 onCalcbuy={onCalcbuy}
                            onCalcb={onCalcb}

                        />
                        : null
                    }

                    {toggles
                        ? <Calculator_2 onCalcbuy={onCalcbuy} onCalcb={onCalcb} />
                        : null
                    }

                    {toggl
                        ? <Calculator_3 onCalcbuy={onCalcbuy} onCalcb={onCalcb} />
                        : null
                    }
                </section>
            </main>
            <Footer />

        </>
    );
}

export default Main;