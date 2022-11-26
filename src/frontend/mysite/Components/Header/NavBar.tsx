import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import style from "./NavBar.module.css";
export const NavBar = () =>
{
    const [searchValue, SetSearchValue] = useState("Search Area");

    useEffect(() =>
    {
        SetSearchValue("Search Area")
    }, [])
    return (
        <nav id="navbar" className={`navbar g-4 font-size-20 pb-5 navbar sticky-top container-xxl ${style.bg_navbar}`}>
            <div className="container-xxl row">
                <ol className="col-8 row justify-content-between text-center list-unstyled">
                    <li className="col-2">Бренд</li>
                    <li className="col-2">Книги</li>
                    <li className="col-8">
                        <div className="input-group flex-nowrap d-flex justify-content-around">
                            <span className="input-group-text">Books</span>
                            <input type="text" className={`form-control border-0 ${style.inputnone}`} placeholder={searchValue}
                                aria-label="Search Area" aria-describedby="addon-wrapping"
                                onChange={e => e.target.value}  />
                        </div>
                    </li>
                </ol>
                <div className="col-4 d-flex justify-content-around">
                    <div className="row font-size-16">
                        <ol className="row list-unstyled">
                            <li className="col-5 ">
                                <span>User Name:</span>
                            </li>
                            <li className="col-7">
                                <input className={`border-0 border-secondary rounded-pill bg-opacity-10 text-center ${style.inputnone}`} type="text" placeholder="User" />
                            </li>
                        </ol>
                        <ol className="row list-unstyled">
                            <li className="col-5">
                                <span>Password:</span>
                            </li>
                            <li className="col-7">
                                <input className={`border-0 border-secondary rounded-pill bg-opacity-10 text-center ${style.inputnone}`} type="text" placeholder="Pass" />
                            </li>
                        </ol>
                        <div className="row">
                            <div className="col-5"></div>
                            <div className="col-7">
                                <Button className={`border-0 text-black ${style.colorwhite} ${style.bgcolor}`} type="submit">Enter</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
}
