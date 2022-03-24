import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

//create slice
const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        productAddedToCart: (carts, action) => {
            carts.push({
                productId: ++lastId,
                quantity: action.payload.quantity
            });
        },
        productRemovedFromCart: (carts, action) => {
            const index = carts.findIndex(cart => cart.productId === action.payload.productId);
            if (index >  -1) {
                carts.splice(index, 1)
            }
        }
    }
})

export const { productAddedToCart, productRemovedFromCart} = slice.actions;
export default slice.reducer;