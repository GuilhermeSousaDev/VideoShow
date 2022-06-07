import { 
    FC, 
    createContext, 
    useState, 
    ReactNode,
    useEffect,
} from "react";
import { isExpired } from 'react-jwt';
import { IContext } from "../../interfaces/IContext";

interface BaseLayoutProps {
    children?: ReactNode;
}

const AuthContext = createContext<IContext>({ 
    token: '', 
    isAuth: false,
});

const AuthProvider: FC<BaseLayoutProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>('sdsa');
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }

        if (token && !isExpired(token)) {
            setIsAuth(true);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, isAuth }}>
            { children }
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider }