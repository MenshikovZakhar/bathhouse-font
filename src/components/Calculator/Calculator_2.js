import { useState } from "react";
import { top } from "../../constants/arrayPortfolio";
import "./Calculator.css";

const getFormattedPrice = (price) => `₽ ${price.toFixed(2)}`;

function Calculator_2({ onCalcbuy, onCalcb }) {
    const [checkedState, setCheckedState] = useState(
        new Array(top.length).fill(false)
    );


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
                    return sum + top[index].price;
                }
                return sum;
            },
            0
        );

        const checkedItems = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + ' ' + top[index].name + ' - ⌀' + top[index].size + '; ';
                }
                return sum;
            },
            'Комплектация:'
        );

        setTot(checkedItems);
        setTotal(totalPrice);
    };


    return (
        <div className="App">
            <h3>Select Toppings</h3>
            <ul className="calculator-list">
                {top.map(({ name, price, src, size }, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <img className="image_2" src={src} />
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                                <div className="right-section">{getFormattedPrice(price)}</div>
                            </div>
                        </li>
                    );
                })}
                <li>
                    <div className="toppings-list-item">
                        <div className="left-section">Total:</div>
                        <div className="right-section">{getFormattedPrice(total)}</div>
                    </div>
                </li>
                <button className="card__button" type="button" onClick={handleClick} >Заказать</button>
            </ul>

        </div>
    );
}

export default Calculator_2;