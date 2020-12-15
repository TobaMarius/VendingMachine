import React from 'react';
import "./Item.css"
import { useDispatch } from "react-redux";

const Item = ({ image, price, code, quantity, credit }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (quantity === 0 || credit < price) {
            return;
        }
        dispatch({
            type: 'SELL_PRODUCT',
            payload: {
                code: code,
                price: price
            }
        });
    }


    return (
        <div onClick={handleClick} className={quantity > 0 ? "item__div" : "empty__item__div"} style={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
            backgroundSize: "cover",
            color: "#fff",
            position: "relative"
        }}>
            <div className="item item__price">Price {price}</div>
            <div className="item item__code">Code {code}</div>
        </div>
    );
}



export default Item;