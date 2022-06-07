import { ChangeEvent, FC, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/Axios";
import { Container } from "./style";

const Register: FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<{ [key: string]: string }>();

    const handleChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

    const handleRegisterUser = useCallback(async () => {
        const { status } = await api.post('user', form);

        if (status === 200) {
            navigate('/login');
        }
    }, [form, navigate]);

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
                <button onClick={handleRegisterUser}>Register</button>=
                <br />
                <Link to={'/login'}>
                    <button>Cancelar</button>
                </Link>
            </div>
        </Container>
    )
}

export default Register;