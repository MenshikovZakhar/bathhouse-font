import React from 'react';
import './Сard.css';
function Сard({ card, onOrderbuy }) {

    function handleClick() {
        onOrderbuy(card);
    }
    return (
        <li className="elements__card">
            <img className="image" src={card.src} />
            <div className="elements__description">
                <div className="elements__characteristic">
                    <p className="card__text">Диаметр:</p>
                    <p className="card__characteristic">{card.size}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Материал:</p>
                    <p className="card__characteristic">{card.material}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Кол-во человек:</p>
                    <p className="card__characteristic">{card.quantity}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Объём:</p>
                    <p className="card__characteristic">{card.volume}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Отделка:</p>
                    <p className="card__characteristic">{card.finishing}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Комплектация:</p>
                    <p className="card__characteristic">{card.equipment}</p>
                </div>
                <div className="elements__characteristic">
                    <p className="card__text">Цена:</p>
                    <p className="card__characteristic">{card.price}</p>
                </div>
            </div>
            <button type="button" onClick={handleClick}>Заказать</button>
        </li>
    )
}

export default Сard;

