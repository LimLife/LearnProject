import { FC } from "react";
import { useRouter } from "next/router";
import _LayoutBlank from "../../Components/_Layouts/_LayoutBlank";
import PageWithLayoutType from "../../Components/_Layouts/_LayoutType/LayoutType";
import { Button, Form } from "react-bootstrap";

const Registration: FC = () =>
{
    const path = useRouter();
    return (
        <div className="container-fluid bg-black">
            <div className="position-absolute top-50 start-50 translate-middle">
                <Form>
                    <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We`ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() =>path.back()}>                   
                        Enter
                    </Button>
                </Form>          
            </div>
        </div>
    )
}
(Registration as PageWithLayoutType).layout = _LayoutBlank;
export default Registration;