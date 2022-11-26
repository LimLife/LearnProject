import { FC, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { IUsers } from "../../../pages/Redux/IUsers";


export const UserItem: FC<{ User: IUsers }> = ({ User}) =>
{
    const [collapse, SetCollapse] = useState(false);
    return (
        <div className="col">
            <h5 className="text-center">User Id:  {User.id}</h5>
            <ol className="list-unstyled">
                <li className="col">
                    <span className="">Name: {User.name}
                    </span>
                </li>
                <li className="col">
                    UserName: {User.username}
                </li>
                <li className="col">
                    Site: {User.website}
                </li>
                <li className="col">
                    Company: {User.company.name}
                </li>
                <li className="col">
                    Phone: {User.phone}
                </li>
            </ol>
            <div className="ms-4">
                <Button onClick={() => SetCollapse(!collapse)}>
                <span className="text-center">More Information</span>
            </Button>
            </div>

            <Collapse in={collapse}>
                <div className="collapse">
                    <div className="card card-body bg-light border-0 bg-transparent">
                        <ol className="">
                            <li className="">City:{User.address.city}</li>
                            <li className="">Street:{User.address.street}</li>
                            <li className="">Suite:{User.address.suite}</li>
                        </ol>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}