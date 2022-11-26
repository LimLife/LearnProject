import React from "react";
import { IUsers } from "../../../pages/Redux/IUsers"
import { UserItem } from "./UsersItem"


export const MainBodyContent: React.FC<{ data: IUsers[] }> = ({ data }) =>
{
    let key:number = 1;
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
            {data.map((user) => (<UserItem key={key += 1} User={user} />))}
        </div>)
}



