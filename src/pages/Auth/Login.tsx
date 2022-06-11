import { ChangeEvent, FC, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/Axios";
import { Container } from './style';

const Login: FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<{ [key: string]: string }>();

    const handleChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }, [form]);

    const handleLoginForm = useCallback(async () => {
        const { data } = await api.post('/session', form);

        localStorage.setItem('token', data?.token);

        navigate('/')

        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }, [form, navigate]);

    return (
        <Container>
            <h1>Login</h1>

            <div>
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
                <button onClick={handleLoginForm}>Login</button>
                <Link to={'/register'}>
                    <button>Register</button>
                </Link>
            </div>
        </Container>
    )
}

export default Login;