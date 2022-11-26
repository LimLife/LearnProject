import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDiscount } from "../ForDiscount/IDiscount";

interface IDiscounts
{
    Discounts:IDiscount[]
}
const initialState:IDiscounts =
{
    Discounts:[]
} 
export const reducerDiscount = createSlice
    (
        {
            name: "Discounts",
            initialState,
            reducers: {
                example: (state, action: PayloadAction<IDiscount>)=>
                {
                    state.Discounts.push(action.payload);
                }
            }


        }
    )
export default reducerDiscount.reducer;
export const { } = reducerDiscount.actions;