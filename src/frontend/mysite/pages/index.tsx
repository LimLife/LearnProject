import { FC, useEffect } from "react";
import { _LayoutBody } from "../Components/Body/_LayoutBody";
import _Layout from "../Components/_Layouts/_Layout";
import {PageWithLayoutType} from "../Components/_Layouts/_LayoutType/LayoutType";
import { useAppDispatch } from "./Redux/HoockUsers";
import { addAsync } from "./Redux/Reduser/ReduserUsers";

const Home:FC = () =>
{
    const dispatch = useAppDispatch();
    useEffect(() =>
     {
         dispatch(addAsync());
     }, [])

    return (<>
     <_LayoutBody/>
    </>)
        
}
(Home as PageWithLayoutType).layout = _Layout;
export default Home;