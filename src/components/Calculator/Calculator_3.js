import { useState } from "react";
import { topp } from "../../constants/arrayPortfolio";
import "./Calculator.css";

const getFormattedPrice = (price) => `₽ ${price.toFixed(2)}`;

function Calculator_3({ onOrderbuy }) {
    const [checkedState, setCheckedState] = useState(
        new Array(topp.length).fill(false)
    );



    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + topp[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    };


    return (
        <div className="App">
            <h3>Select Toppings</h3>
            <ul className="toppings-list">
                {topp.map(({ name, price, src }, index) => {
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
            </ul>

        </div>
    );
}

export default Calculator_3;