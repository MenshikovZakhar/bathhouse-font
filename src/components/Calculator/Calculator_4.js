import { useState, useEffect } from "react";
import { toppings } from "../../constants/arrayPortfolio";
import "./Calculator.css";

const getFormattedPrice = (price) => `₽ ${price.toFixed(2)}`;

function Calculator_4({ onCalcbuy, onCalcb }) {
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );
    const [fixedHeader, setFixedHeader] = useState(false);

    function handleClick() {
        onCalcbuy(tot);
        onCalcb(total);
    }

    const [total, setTotal] = useState(0);
    const [tot, setTot] = useState([]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + toppings[index].price;
                }
                return sum;
            },
            0
        );

        const checkedItems = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + ' ' + toppings[index].name + ' - ⌀' + toppings[index].size + '; ';
                }
                return sum;
            },
            'Комплектация:'
        );

        setTot(checkedItems);
        setTotal(totalPrice);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 150) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        });
    }, []);

    return (
        <div className="App">
            <h3>Ø 1750 мм. 2– 4 человека</h3>
            <ul className="calculator-list">
                {toppings.map(({ name, price, src, size }, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <label className="calculator__container">
                                    <input
                                        className="calculator__input"
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <img className="image_2" src={src} />
                                <div className="left-section">
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                                <div className="right-section">{getFormattedPrice(price)}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>


            <div className='total-list-item_active_1'>
                <div className="total-section">Сумма заказа:</div>
                <div className="right-section">{getFormattedPrice(total)}</div>
            </div>

            <button className="calculator__button" type="button" onClick={handleClick} >Заказать</button>
        </div>
    );
}

export default Calculator_4;