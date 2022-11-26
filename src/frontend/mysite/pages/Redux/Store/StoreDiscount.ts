import { configureStore } from "@reduxjs/toolkit";
import Discounts from "../Reduser/DiscountsReducer";

export const reducerDiscount = configureStore({
    reducer:
    {
        name: Discounts,
    }
})
export type RootState = ReturnType<typeof reducerDiscount.getState>
export type AppDispatch = typeof reducerDiscount.dispatch