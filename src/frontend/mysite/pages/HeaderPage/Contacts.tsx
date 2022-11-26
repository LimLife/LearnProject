import Link from "next/link";
import { FC } from "react"

const Contacts:FC = () =>
{
    return (
        <div className="mb-auto container-xxl justify-content-start">
            <span>Contacts</span>
            <ol>
                <li>
                    <Link href="https:github.com/LimLife">
                        <a>
                            Git
                        </a>
                    </Link>
                </li>
                <li>Email:LimFobos</li>
                <li>Fake number: <strong>+7800355355</strong></li>
            </ol>
        </div>
    )
}
export default Contacts;