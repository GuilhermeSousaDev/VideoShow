import { FC, useContext } from "react"
import { Link } from "react-router-dom";
import { decodeToken } from 'react-jwt';
import { AuthContext } from "../../store/Context/AuthContext";
import { Nav, Links } from "./style";

const Navbar: FC = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <Nav>
            <h1>VideoShow</h1>
            <Links>
                <Link to="/">Home</Link>
                { isAuth? 
                    <Link to="/profile">Username</Link> : 
                    <Link to="/login">Login</Link>  
                }
                <Link to="/videos">Videos</Link>
                <Link to="/upload">Upload</Link>
            </Links>
        </Nav>
    )
};

export default Navbar;