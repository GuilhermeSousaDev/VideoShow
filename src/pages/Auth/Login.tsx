import { ChangeEvent, FC, useCallback, useState } from "react";
import { Container } from './style';

const Login: FC = () => {
    const [form, setForm] = useState<{ [key: string]: string }>();

    const handleChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }, [form]);

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
                <button onClick={() => console.log(form)}>Login</button>
            </div>
        </Container>
    )
}

export default Login;