import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        if (data.password !== data.secondPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        else if (data.name.split(" ").length !== 2) {
            toast.error("Please enter your first and last name seprated by whitespace!");
            return;
        }
        else {
            toast.success("All's good!");
            return;
        }
    };

return (
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First & Last name</Form.Label>
                <Form.Control placeholder="Full name" {...register("name")} />
                <Form.Text className="text-muted">
                We'll never share your name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat your password</Form.Label>
                <Form.Control type="password" placeholder="Second time" {...register("secondPassword")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
)
}

export default LoginForm