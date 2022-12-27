import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import CatalogNav from './CatalogNav/CatalogNav';
import { useState, useEffect } from 'react';
import Calculator_1 from '../Calculator/Calculator_1';
import Calculator_2 from '../Calculator/Calculator_2';
function Catalog_3({ onCalcbuy }) {

    const [toggle, setToggle] = useState(true);
    const [toggles, setToggles] = useState(true);

    useEffect(() => {
        setToggle(true);
        setToggles(false);
    }, []);

    const onClickOpenMenu = () => {
        setToggle(true);
        setToggles(false);
    };

    const onClickOpenMenus = () => {
        setToggles(true);
        setToggle(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };
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
                        <h2 className="сatalog__title">Выбери и рассчитай свою комплектацию</h2>
                        <div className='сatalog-button'>
                            <button className="card__button" onClick={onClickOpenMenu}>4</button>
                            <button className="card__button" onClick={onClickOpenMenus}>6</button>
                        </div>
                        {toggle
                            ? <Calculator_1 onCalcbuy={onCalcbuy}

                            />
                            : null
                        }

                        {toggles
                            ? <Calculator_2 />
                            : null
                        }


                    </section>

                </>

            </main>
            <Footer />
        </>
    );
}

export default Catalog_3;