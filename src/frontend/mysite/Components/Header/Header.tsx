import Link from "next/link";
import Image from "next/image";
import img from "./Source/Logo.png";
export const Header:React.FC = () =>
{
    return (
        <div className="row justify-content-between font-size-14 pb-3 text-center">
            <div className="col-2">
                <span className="col-1"><s>Fun Project=)</s></span>
            </div>
            <div className="col-2">
                <Link href="/" className="col-3">                  
                        <Image src={img} alt="Logo" width={50} height={40} />
                </Link>
            </div>
            <div className="col-3">
                <Link href="/HeaderPage/Project" className="col-3">Проекты</Link>
            </div>
            <div className="col-3">
                <Link href="/HeaderPage/Contacts" className="col-3">Контакты</Link>
            </div>
            <div className="col-2">
                <Link href="/HeaderPage/About" className="col-2">О нас</Link>
            </div>
        </div>
    )
}