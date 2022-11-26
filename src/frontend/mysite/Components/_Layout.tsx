import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../pages/Redux/HoockUsers";
import { addAsync } from "../pages/Redux/Reduser/ReduserUsers";
import { _LayoutFooter } from "./Footer/_LayoutFooter";
import { NavBar } from "./Header/NavBar";
import { _LayoutHeader } from "./Header/_LayoutHeader";
import style from "./_Layout.module.css";
type Children =
    {
        children: React.ReactNode;
    }

export const _Layout: NextPage<Children> = ({ children }) =>
{
    const dispatch = useAppDispatch();
    useEffect(() =>
    {
        dispatch(addAsync());
    }, [])
    return (
        <div id="Main _Layout" className={`container-fluid bg-light ${style._Layout} ${style.bg_Layout}`}>
            <_LayoutHeader />
            <NavBar/>
            {children}
            <_LayoutFooter />
        </div>
    )
}
