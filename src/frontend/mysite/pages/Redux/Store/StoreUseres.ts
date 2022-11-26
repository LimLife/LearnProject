import { configureStore } from "@reduxjs/toolkit";
import Users from "../Reduser/ReduserUsers";

export const reducer = configureStore({
    reducer:
    {
        name: Users
    }
})
export type RootState = ReturnType<typeof reducer.getState>
export type AppDispatch = typeof reducer.dispatch