import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import About from './About/About';
function Main({ }) {
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
            </main>
            <Footer />

        </>
    );
}

export default Main;