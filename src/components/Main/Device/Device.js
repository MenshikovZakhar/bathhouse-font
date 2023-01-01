import './Device.css';
import slide20 from '../../../images/calculator/20.png';
import slide3 from '../../../images/calculator/3.png';
import slide4 from '../../../images/calculator/4.png';
import slide5 from '../../../images/calculator/5.png';
import slide6 from '../../../images/calculator/6.png';
function Device() {
    return (
        <section className='device'>
            <div className="device__description">
                <h1 className="about__title">Устройство чана</h1>
                <div className="device__about">
                    <img className='img_device' src={slide20} alt='' />
                    <p className="device__text_1">Банный чан это  полусферическая ёмкость в зависимости от своего размера, предназначенная для
                        купания от 1 до 8 человек. Банный чан изготавливается из антикоррозийного стального сплава или нержавеющей стали и устанавливается на металлическую опору. Снизу чан подогревается очагом для нагрева воды до комфортной температуры. Температура воды
                        внутри чана нагревается и поддерживается на уровне 40 С°, при этом благодаря особенностям своей конструкции края ёмкости остаются холодными, поэтому обжечься
                        невозможно. Изделие обычно размещают на открытом воздухе рядом с баней, где оно становится  отличным дополнением
                        к ней.
                    </p>
                </div>
                <div className="device__about">
                    <img className='img_device' src={slide3} alt='' />
                    <p className="device__text">Пол, сидения и спинки внутри чана изготавливаются из лиственницы высшего сорта с
                        пропиткой специальными составами от гниения и плесени. Для чистки чана они легко снимаются и устанавливаются на место.
                    </p>
                </div>

                <div className="device__about_2">
                    <h2 className="device__name-title">Подставки под чан</h2>
                    <ul className="about__list">
                        <li className="about__link"><img className='img_about' src={slide4} alt='' />
                            <h2 className="about__name-title">Открытая подставка-каркас</h2>
                            <p className="about__name">Данная комплектация отлично подойдёт при использовании в качестве источника нагрева для
                                чана открытого костра или монтажа печи из кирпича или камня.</p></li>
                        <li className="about__link"><img className='img_about' src={slide5} alt='' />
                            <h2 className="about__name-title">Подставка с ветрозащитой</h2>
                            <p className="about__name">
                                Использование подставки с ветрозащитой способствует быстрому нагреву воды и экономии расхода дров у
                                источника нагрева даже в очень холодную погоду.
                            </p>
                        </li>
                        <li className="about__link"><img className='img_about' src={slide6} alt='' />
                            <h2 className="about__name-title">Подставка с печью.</h2>
                            <p className="about__name">Это удобное, практичное и функциональное решение. Подставка-печь, способна быстро нагреть
                                банный чан даже в очень холодную погоду. Использования чанов с подставкой-печью экономит расход дров
                                в отличие от моделей без печки.</p></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Device; 