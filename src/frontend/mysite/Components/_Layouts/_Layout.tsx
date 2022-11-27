import React from "react";
import { _LayoutFooter } from "../Footer/_LayoutFooter";
import { NavBar } from "../Header/NavBar";
import { _LayoutHeader } from "../Header/_LayoutHeader";
import style from "./_Layout.module.css";
import { LayoutProps } from "./_LayoutType/LayoutType";

const _Layout: LayoutProps = ({ children }) =>
{
    return (
        <div id="Main _Layout" className={`container-fluid bg-light ${style._Layout} ${style.bg_Layout}`}>
            <_LayoutHeader />
            <NavBar />
            {children}
            <_LayoutFooter />
        </div>
    )
}
export default _Layout;
