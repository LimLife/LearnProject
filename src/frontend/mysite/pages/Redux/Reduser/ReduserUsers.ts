import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import IUser, { IUsers} from "../IUsers";

export const addAsync = createAsyncThunk<IUsers[]>(
    "Users/AddAsync",
    async function ()
    {
        try
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=8");
            const data = await response.json();

            return data;
        } catch (error)
        {

        }
    }
)
interface IUserState
{
    users:IUsers[]
}
const initialState: IUserState =
{
    users:[]
}

export const reducer = createSlice(
    {
        name: "Users",
        initialState ,
        reducers: {
            ss: (state, payload: PayloadAction<IUser>) =>
            {
                
            },

        },
        extraReducers: (build) =>
        {
            build.addCase(addAsync.fulfilled, (state,action:PayloadAction<IUsers[]>) =>
            {
                state.users.push(...action.payload);
            })
        },




    })
export default reducer.reducer;
export const { ss } = reducer.actions;