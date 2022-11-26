import { AdvertisingBanners } from "./BodyContent/AdvertisingBanners"
import { MainBodyContent } from "./BodyContent/MainBodyContent"
import { useAppSelector } from "../../pages/Redux/HoockUsers";

import style from "./LayoutBody.module.css";

export const _LayoutBody:React.FC = () =>
{
    const select = useAppSelector((s) => s.name.users);
    return (
        <div id="body" className={`container-xxl ${style.content}`}>         
            <AdvertisingBanners />
            <MainBodyContent data = {select} />
        </div>)
}