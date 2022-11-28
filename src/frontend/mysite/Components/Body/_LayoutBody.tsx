import { AdvertisingBanners } from "./BodyContent/AdvertisingBanners"
import { MainBodyContent } from "./BodyContent/MainBodyContent"
import { useAppSelector } from "../../pages/Redux/HoockUsers";

export const _LayoutBody:React.FC = () =>
{
    const select = useAppSelector((s) => s.name.users);
    return (
        <div id="body" className="flex-grow-1 container-xxl">         
            <AdvertisingBanners />
            <MainBodyContent data = {select} />
        </div>)
}