import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Main({ onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Окрашивание волос в Челябинске</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки Челябинск" />
                <link rel="canonical" href="/" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
            </main>
            <Footer />

        </>
    );
}

export default Main;