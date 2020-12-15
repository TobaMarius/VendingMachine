import React from 'react';
import Item from '../item/Item';
import { connect } from "react-redux";
import "./Display.css";
import Credit from '../credit/Credit';
import Keypad from '../keypad/Keypad';


const Display = ({ products, credit }) => {


    const renderItems = () => {
        let prodId = -1;

        return (
            [1, 2, 3, 4, 5].map((n) => {
                return (
                    <div key={n} className="vending__row">
                        {
                            [1, 2, 3, 4].map((m) => {
                                prodId++;
                                return (
                                    <Item key={m} credit={credit} code={products[prodId].code} id={products[prodId].id} name={products[prodId].name} quantity={products[prodId].quantity} price={products[prodId].price} image={products[prodId].image} />
                                )
                            })
                        }
                    </div>
                )
            })
        )
    }

    return (
        <div className="vending__machine">
            <div className="vending__display">
                {renderItems()}
            </div>
            <div className="vending__controls">
                <div className="vending__credit">
                    <Credit />
                </div>
                <div className="vending__keypad">
                    <Keypad />
                </div>
            </div>
        </div>
    );
}


export const mapStateToProps = state => {
    return {
        products: state.productsReducer.products,
        credit: state.productsReducer.credit
    };
};


export default connect(mapStateToProps)(Display);