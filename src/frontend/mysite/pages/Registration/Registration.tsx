import { useRouter } from "next/router";
import { FC } from "react";

const Registration:FC = () =>
{
    const backPage = useRouter();
    return (
        <div className="container-xxl mb-auto">
            <ol className="list-unstyled justify-content-center">
                <li>Name</li>
                <li>Address</li>
                <li>Email</li>
            </ol>
            <div>
                <button type="submit" onClick={()=>backPage.back()}>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default Registration;