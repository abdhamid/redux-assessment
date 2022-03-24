import store from "./store/store";
// import { productAdded, hasDiscount} from './store/product/actions'
import * as actions from './store/product'
import { productAdded, hasDiscount, productRemoved} from './store/product'

store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({
    name: "Product 1",
    price: 1500,
}));

store.dispatch(productAdded({
    name: "Product 2",
    price: 1000,
}));

store.dispatch({
    type: actions.PRODUCT_REMOVED,
    payload: {
        id: 1
    }
});


store.dispatch(hasDiscount({
    id: 2,
    hasDiscount: true
}));


console.log(store.getState())
