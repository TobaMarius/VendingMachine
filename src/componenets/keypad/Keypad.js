import React, { useState } from 'react';
import "./Keypad.css"
import { connect, useDispatch } from "react-redux";

const Keypad = ({ products, credit }) => {
    const dispatch = useDispatch();
    const [selectedItem, setSelecteditem] = useState("");


    const handleClick = (event) => {
        if (event.target.value === "Del") {
            setSelecteditem("")
        } else
            setSelecteditem(selectedItem + event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        const code = selectedItem;
        setSelecteditem("");
        const product = products.find(product => product.code === code);
        if (product) {
            if (product.quantity === 0 || credit < product.price) {
                return;
            }

            dispatch({
                type: 'SELL_PRODUCT',
                payload: {
                    code: product.code,
                    price: product.price
                }
            });
        }

    }

    return (
        <div className="keypad__form__container">
            <form className="keypad__form" onSubmit={handleSubmit}>
                <input className="keypad__input" type="text" readOnly value={selectedItem} placeholder={"Enter Code"} />
                <div className="keypad__container">
                    <div className="keyPad_row">
                        <button onClick={handleClick} type="button" value="1" className="keypad__button">1</button>
                        <button onClick={handleClick} type="button" value="2" className="keypad__button">2</button>
                        <button onClick={handleClick} type="button" value="3" className="keypad__button">3</button>
                        <button onClick={handleClick} type="button" value="4" className="keypad__button">4</button>
                    </div>
                    <div className="keyPad_row">
                        <button onClick={handleClick} type="button" value="5" className="keypad__button">5</button>
                        <button onClick={handleClick} type="button" value="6" className="keypad__button">6</button>
                        <button onClick={handleClick} type="button" value="7" className="keypad__button">7</button>
                        <button onClick={handleClick} type="button" value="8" className="keypad__button">8</button>
                    </div>
                    <div className="keyPad_row">
                        <button onClick={handleClick} type="button" value="9" className="keypad__button">9</button>
                        <button onClick={handleClick} type="button" value="0" className="keypad__button">0</button>
                        <button onClick={handleClick} type="button" value="Del" className="keypad__button">Clear</button>
                        <button onClick={handleClick} type="submit" className="keypad__button">OK</button>
                    </div>
                </div>
            </form>
        </div >
    );
}

export const mapStateToProps = state => {
    return {
        products: state.productsReducer.products,
        credit: state.productsReducer.credit
    };
};

export default connect(mapStateToProps)(Keypad);
