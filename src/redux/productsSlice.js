import { createSlice } from "@reduxjs/toolkit";
import productData from "./data.json";

const products = productData.products;

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: products,
        wallet: 100000000000,
        basket: [],
        total: 0
    },
    reducers: {
        sellButton: (state, action) => {
            const product = state.items.find(item => item.id === action.payload.id)
            product.count = Number(product.count) - 1

            const basket = state.items.filter(item => item.count > 0)
            state.basket = basket

            let total = 0;
            for (let i = 0; i < basket.length; i++) {

                total += Number(basket[i].count) * Number(basket[i].productPrice)
            }

            state.total = total

            state.wallet = state.wallet + Number(product.productPrice)
        },
        buyButton: (state, action) => {

            const product = state.items.find(item => item.id === action.payload.id)
            product.count = Number(product.count) + 1

            const basket = state.items.filter(item => item.count > 0)
            state.basket = basket

            let total = 0;
            for (let i = 0; i < basket.length; i++) {

                total += Number(basket[i].count) * Number(basket[i].productPrice)
            }

            state.total = total
            state.wallet = state.wallet - Number(product.productPrice)
        }

    }
})

export const { sellButton, buyButton, addBasket } = productsSlice.actions;

export default productsSlice.reducer;