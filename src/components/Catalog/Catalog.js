import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import Сard from '../Сard/Сard';
import { catalog_1 } from '../../constants/arrayPortfolio';

function Catalog({ onOrderbuy }) {
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
                    <section className='portfolio-card'>
                        <h2 className="сatalog__title">Купель</h2>
                        <ul className='elements'>
                            {catalog_1.map((card, index) => {
                                return (
                                    <Сard key={index}
                                        card={card}
                                        onOrderbuy={onOrderbuy}
                                    />
                                );
                            })
                            }
                        </ul>

                    </section>
                </>

            </main>
            <Footer />
        </>
    );
}

export default Catalog;