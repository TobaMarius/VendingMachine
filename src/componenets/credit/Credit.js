import React from 'react';
import "./Credit.css"
import { connect, useDispatch } from "react-redux";

const Credit = ({ credit }) => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        const credit = Number(event.target.value);
        dispatch({
            type: "ADD_CREDIT",
            payload: {
                credit: credit
            }
        })
    }

    return (
        <div className="credit__form__container">
            <form className="credit__form">
                <label className="input__label">CREDIT</label>
                <input className="credit__input" type="text" readOnly value={credit} placeholder={"Credit"} />
                <div className="credit__container">
                    <button onClick={handleClick} value="5" className="credit__button">5</button>
                    <button onClick={handleClick} value="10" className="credit__button">10</button>
                    <button onClick={handleClick} value="15" className="credit__button">15</button>
                    <button onClick={handleClick} value="20" className="credit__button">20</button>
                </div>
            </form>
        </div>
    );
}

export const mapStateToProps = state => {
    return {
        credit: state.productsReducer.credit,
    };
};

export default connect(mapStateToProps)(Credit);