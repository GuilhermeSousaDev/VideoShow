import { FC } from "react"
import { Link } from "react-router-dom";
import { Nav, Links } from "./style";

const Navbar: FC = () => {
    return (
        <Nav>
            <h1>VideoShow</h1>
            <Links>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/upload">Upload</Link>
            </Links>
        </Nav>
    )
};

export default Navbar;