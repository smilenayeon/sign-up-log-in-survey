import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
const Header = () => {
    const navigate = useNavigate();
    return (_jsx("div", { children: _jsx("h1", { className: "header-title", onClick: () => { navigate("/"); }, children: "Simple Survey Project" }) }));
};
export default Header;
