import * as actions from './actionTypes';

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: actions.PRODUCT_ADDED,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            hasDiscount: product.hasDiscount ? true : false
        }
    }
}

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
 export function productRemoved(id){
    return {
        type: actions.PRODUCT_REMOVED,
        payload: {
            id: id ? id : null,
        }
    }
}

export function hasDiscount(params = {}){
    return {
        type: actions.PRODUCT_DISCOUNT,
        payload: {
            id: params.id ? params.id : null,
            hasDiscount: params.hasDiscount ? true : false

        }
    }
}
