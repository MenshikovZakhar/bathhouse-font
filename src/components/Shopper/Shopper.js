import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Shopper.css';
import { Helmet } from 'react-helmet-async';
import icon_1 from '../../images/icon_1.png';
import icon_2 from '../../images/icon_2.png';
import icon_3 from '../../images/icon_3.png';
import icon_4 from '../../images/icon_4.png';
import icon_5 from '../../images/icon_5.png';
import icon_6 from '../../images/icon_6.png';
function Shopper() {

    return (
        <>
            <Helmet>
                <title>Оплата и доставка</title>
                <meta name="description" content="Оплата и доставка" />
                <link rel="canonical" href='/shopper' />
            </Helmet>
            <Header />
            <section className='shopper'>
                <div className="shopper__description">
                    <h1 className="shopper__title">Как зделать заказ</h1>

                    <ul className="shopper__list">
                        <li className="shopper__link">
                            <h2 className="shopper__number">1)</h2>
                            <img className='img_shopper' src={icon_1} alt='' />
                            <h2 className="shopper__name-title">Выбор чана</h2>
                            <p className="shopper__name">Выберите размер купели, тип стали, вид подставки, отделку и дополнительные комплектации.
                                Также вы можете выбрать готовую компелектацию в нашем каталоге</p></li>
                        <li className="shopper__link">
                            <h2 className="shopper__number">2)</h2>
                            <img className='img_shopper' src={icon_2} alt='' />

                            <h2 className="shopper__name-title">Заключение договора</h2>
                            <p className="shopper__name">
                                После согласования комплектации заключается договор на изготовление и поставку продукции.
                            </p>
                        </li>
                        <li className="shopper__link">
                            <h2 className="shopper__number">3)</h2>
                            <img className='img_shopper' src={icon_3} alt='' />
                            <h2 className="shopper__name-title">Предоплата заказа</h2>
                            <p className="shopper__name">Вы производите предоплату 30% от стоимости Вашего заказа, любым удобным для Вас
                                способом </p></li>
                        <li className="shopper__link">
                            <h2 className="shopper__number">4)</h2>
                            <img className='img_shopper' src={icon_4} alt='' />
                            <h2 className="shopper__name-title">Изготовление</h2>
                            <p className="shopper__name">Сроки изготовления зависят от выбранного размера и комплектации, но не более
                                10 рабочих дней. </p></li>

                        <li className="shopper__link">
                            <h2 className="shopper__number">5)</h2>
                            <img className='img_shopper' src={icon_5} alt='' />
                            <h2 className="shopper__name-title">Доставка</h2>
                            <p className="shopper__name">После оплаты оставшейся части Вашего заказа мы отправляем Вам банный чан. Заказ
                                доставляется траспортной компанией либо нашими силами.</p></li>

                        <li className="shopper__link">
                            <h2 className="shopper__number">6)</h2>
                            <img className='img_shopper' src={icon_6} alt='' />
                            <h2 className="shopper__name-title">Гарантия</h2>
                            <p className="shopper__name">Товар от производителя! Высокачественные материалы, качественная сборка, 5 лет гарантии
                                на изделие!!!</p></li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Shopper; 