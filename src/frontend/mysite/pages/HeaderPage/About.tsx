import { FC } from "react"
import _Layout from "../../Components/_Layouts/_Layout";
import _LayoutBlank from "../../Components/_Layouts/_LayoutBlank";
import {PageWithLayoutType} from "../../Components/_Layouts/_LayoutType/LayoutType";
const About: FC = () =>
{
    return (
        <div className="container-xxl mb-auto justify-content-lg-start flex-grow-1">
            <h1>Anything</h1>
        </div>
    )
}

(About as PageWithLayoutType).layout = _Layout;
export default About;