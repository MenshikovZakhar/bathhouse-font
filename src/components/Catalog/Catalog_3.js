import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import EquipmentNav from './EquipmentNav/EquipmentNav';
import CatalogNav from './CatalogNav/CatalogNav';
import { Route, Switch } from 'react-router-dom';
import { useState, } from 'react';
import Calculator from '../Calculator/Calculator';
import { toppings } from "../../constants/arrayPortfolio";
import { top } from "../../constants/arrayPortfolio";
function Catalog_3({ }) {
    const [selectedCard, setSelectedCard] = useState([]);
    function handleClick() {
        setSelectedCard(top);
    }
    function handleClick_1() {
        setSelectedCard(toppings);
    }
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
                        <div className="">
                            <button className="card__button" type="button" onClick={handleClick}> До 4 человек</button>
                            <button className="card__button" type="button" onClick={handleClick_1}> До 6 человек</button>
                            <button className="card__button" type="button" onClick={handleClick}> До 8 человек</button>
                        </div>
                        <Calculator
                            toppings={selectedCard}
                        />
                    </section>
                </>

            </main>
            <Footer />
        </>
    );
}

export default Catalog_3;