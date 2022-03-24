import axios from "axios";
import { apiProductsRequestSucceeded } from '../product-new'
const api = store => next => async action => {
    if (action.type !== "apiRequest") {
        return next(action);
    }

    next(action);
    //Proses

    const { url, method, data, onSuccess, onError} = action.payload;
    const response = await axios.request({
        baseURL: 'https://fakestoreapi.com',
        url: url,
        method: method,
        data
    })

    store.dispatch(apiProductsRequestSucceeded(response.data));
}

export default api;
