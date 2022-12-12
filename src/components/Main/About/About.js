import './About.css';
import about_img_1 from '../../../images/about_1.png';


function Services() {
    return (
        <section className='about'>
            <div className="about__description">
                <h1 className="about__title">Банный чан это</h1>

                <ul className="services__list">
                    <li className="about__link services__links"><img className='img_services' src={about_img_1} alt='' />
                        <h2 className="services__name-title">Удовольствие в любое время года</h2>
                        <p className="services__name">Банный чан – это новый формат отдыха на открытом воздухе с семьей или друзьями.
                            В холодное время года это купанием в полезном горячем источнике, а летом его можно использовать в качестве бодрящей холодной купели.</p></li>
                    <li className="about__link "><img className='img_services' alt='' />
                        <p className="services__name">Тонирование</p></li>
                    <li className="about__link services__links-3"><img className='img_services' alt='' />
                        <p className="services__name">Женские стрижки</p></li>

                </ul>
            </div>
        </section>
    );
}

export default Services; 