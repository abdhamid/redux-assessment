import * as actions from './actionTypes';
let lastId = 0;
const initialState = [];
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasDiscount
                }
            ];
        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);

        case actions.PRODUCT_DISCOUNT:
            return state.map(product =>
                product.id !== action.payload.id ?
                    product : {
                        ...product,
                        hasDiscount: action.payload.hasDiscount
            });

        default:
            return state;
    }

}