import { FC } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import ShowVideo from "./pages/ShowVideo";
import Videos from "./pages/Videos";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/video/:id" element={<ShowVideo />} />
                <Route path="/videos" element={<Videos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;