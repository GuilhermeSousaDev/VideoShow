import { FC, createContext, useState } from "react";

interface IContext {
    token: string;
}

const AuthProvider = createContext<IContext>({ token: ''});

const AuthContext: FC<IContext> = ({ children }) => {
    const [token, setToken] = useState<string>('sdsa');

    return (
        <AuthProvider.Provider value={{ token }}>
            { children }
        </AuthProvider.Provider>
    )
}

export { AuthContext }