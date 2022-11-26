import React, { FC } from "react"
import { Footer } from "./Footer"
import style from "./_Layout.module.css";


export const _LayoutFooter: FC = () =>
{
    return (<footer className={ `container-xxl ${style.footer}`}>
    <Footer/>
    </footer>)
}