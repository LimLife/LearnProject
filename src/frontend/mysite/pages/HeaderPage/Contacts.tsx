import Link from "next/link";
import { FC } from "react"
import _LayoutBlank from "../../Components/_Layouts/_LayoutBlank";
import {PageWithLayoutType} from "../../Components/_Layouts/_LayoutType/LayoutType";
const Contacts:FC = () =>
{
    return (
        <div className="mb-auto container-xxl justify-content-start">
            <span>Contacts</span>
            <ol>
                <li>
                    <Link href="https:github.com/LimLife">
                            Git
                    </Link>
                </li>
                <li>Email:LimFobos</li>
                <li>Fake number: <strong>+7800355355</strong></li>
            </ol>
        </div>
    )
}
(Contacts as PageWithLayoutType).layout = _LayoutBlank;
export default Contacts;