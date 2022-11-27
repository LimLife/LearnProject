import { NextPage } from "next";
import type { ReactElement } from "react";
import  _Layout  from "../_Layout";
import _LayoutBlank from "../_LayoutBlank"
export type PageWithLayoutMainType = NextPage & { layout: typeof _Layout }
export type PageWithLayoutBlankType = NextPage & { layout: typeof _LayoutBlank }
export type PageWithLayoutType =
    | PageWithLayoutMainType
    | PageWithLayoutBlankType
    
    export type LayoutProps = (
        {
            children,
        }:
            {
                children: ReactElement
            }) => ReactElement 

export default PageWithLayoutType