import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

//create slice
const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        productAdded: (products, action) => {
            products.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                hasDiscount: false
            });
        },
        hasDiscount: (products, action) => {
            const index = products.findIndex(product => product.id === action.payload.id);
            if(index > -1) {
                products[index].hasDiscount = action.payload.hasDiscount;
            }
        },
        productRemoved: (products, action) => {
            const index = products.findIndex(product => product.id === action.payload.id);
            if (index >  -1) {
                products.splice(index, 1)
            }
        }
    }
})

export const { productAdded, hasDiscount, productRemoved } = slice.actions;
export default slice.reducer;