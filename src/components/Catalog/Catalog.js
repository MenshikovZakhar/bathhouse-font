import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Catalog.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import CatalogNav from './CatalogNav/CatalogNav';
import СatalogCardList from '../СatalogCardList/СatalogCardList';

function Catalog({ }) {
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
                    <СatalogCardList type={'all'} />
                </>

            </main>
            <Footer />
        </>
    );
}

export default Catalog;