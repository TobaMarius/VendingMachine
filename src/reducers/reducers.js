import data from "../data/items.json"
import { combineReducers } from "redux";

const initState = {
    products: data,
    credit: 50
};

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case "SELL_PRODUCT":
            state.products.map(product => {
                if (product.code === action.payload.code) {
                    --product.quantity;
                }
                return state
            })

            return {
                ...state,
                credit: state.credit - action.payload.price,
            };

        case "ADD_CREDIT":
            return {
                ...state,
                credit: state.credit + action.payload.credit
            };

        default:
            return state;
    }
};

export default combineReducers({
    productsReducer
});