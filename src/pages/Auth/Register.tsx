import { ChangeEvent, FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

const Register: FC = () => {
    const [form, setForm] = useState<{ [key: string]: string }>();

    const handleChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

    return (
        <Container>
            <h1>Register</h1>

            <div>
                <span>Name</span>
                <input 
                    onChange={handleChangeForm}
                    name="name"
                    type="text" placeholder="Name..." />
                <span>Email</span>
                <input 
                    onChange={handleChangeForm}
                    name="email"
                    type="text" placeholder="Email..." />
                <span>Password</span>
                <input
                    onChange={handleChangeForm}
                    name="password"
                    type="text" placeholder="Password..." />
                <br />
                <button onClick={() => console.log()}>Register</button>
                <Link to={'/login'}>
                    <button>Cancelar</button>
                </Link>
            </div>
        </Container>
    )
}

export default Register;