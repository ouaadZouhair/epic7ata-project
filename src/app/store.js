import { configureStore } from "@reduxjs/toolkit";
import CartShippingSlice from "../slice/CartShippingSlice";

const store = configureStore({
    reducer:{
        cart: CartShippingSlice,
    }
});

export default store;