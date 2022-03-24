export const PRODUCT_ADDED = "productAdded";
export const PRODUCT_REMOVED = "productRemoved";
export const PRODUCT_DISCOUNT = "productDiscount";


/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}) {
    return {
        type: PRODUCT_ADDED,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            hasDiscount: product.hasDiscount ? true : false
        }
    }
}

export function productRemoved(id) {
    return {
        type: PRODUCT_REMOVED,
        payload: {
            id: id ? id : null,
        }
    }
}

export function hasDiscount(params = {}) {
    return {
        type: PRODUCT_DISCOUNT,
        payload: {
            id: params.id ? params.id : null,
            hasDiscount: params.hasDiscount ? true : false

        }
    }
}

let lastId = 0;
const initialState = [];
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: action.payload.hasDiscount
                }
            ];
        case PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);

        case PRODUCT_DISCOUNT:
            return state.map(product =>
                product.id !== action.payload.id ?
                    product : {
                        ...product,
                        hasDiscount: action.payload.hasDiscount
            });


        // case PRODUCT_DISCOUNT:
        //     state.find(product => product.id == action.payload.id).hasDiscount = action.payload.hasDiscount;
        //     return state;
        default:
            return state;
    }

}
