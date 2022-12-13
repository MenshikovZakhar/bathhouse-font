import './About.css';
import about_img_1 from '../../../images/about_1.png';
import about_img_2 from '../../../images/about_2.png';
import about_img_3 from '../../../images/about_3.png';


function Services() {
    return (
        <section className='about'>
            <div className="about__description">
                <h1 className="about__title">Банный чан это</h1>

                <ul className="about__list">
                    <li className="about__link"><img className='img_about' src={about_img_1} alt='' />
                        <h2 className="about__name-title">Удовольствие в любое время года</h2>
                        <p className="about__name">Банный чан – это новый формат отдыха на открытом воздухе с семьей или друзьями.
                            В холодное время года это купанием в полезном горячем источнике, а летом его можно использовать в качестве бодрящей холодной купели.</p></li>
                    <li className="about__link"><img className='img_about' src={about_img_2} alt='' />
                        <h2 className="about__name-title">Полезно для здоровья</h2>
                        <p className="about__name">
                            •	Оздоравливает сердечно-сосудистую систему <br />
                            •	Расслабляет мышцы <br />
                            •	Выводит шлаки и токсины <br />
                            •	Успокаивает нервную систему <br />
                            •	Укрепляет иммунитет <br />
                            •	Улучшает обменные процессы <br />
                        </p></li>
                    <li className="about__link"><img className='img_about' src={about_img_3} alt='' />
                        <h2 className="about__name-title">Коммерческая выгода.</h2>
                        <p className="about__name">Банный чан можно приобрести и для коммерческого использования – для банных комплексов,
                            санаториев, туристических баз. Это возможность увеличить прибыль, привлечь и подарить
                            своим клиентам новые, незабываемые ощущения банного отдыха. </p></li>
                </ul>
            </div>
        </section>
    );
}

export default Services; 