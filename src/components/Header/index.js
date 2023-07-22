import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Btn from '../Btn';
import './header.scss';
const Header = () => {
    function handleMenu() {
        const button = document.querySelector('.menu-button'); //type assertion
        button.classList.toggle('active-button');
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active-menu');
    }
    return (_jsxs("header", { className: 'container', children: [_jsx("img", { src: "./assets/logo.png", alt: "ThirdEye logo", width: 170 }), _jsx("div", { className: 'menu', children: _jsxs("ul", { children: [_jsx("li", { children: _jsxs("a", { href: "", children: ["Resources ", _jsx("i", { className: "fa-solid fa-chevron-down" })] }) }), _jsx("li", { children: _jsxs("a", { href: "", children: ["About ", _jsx("i", { className: "fa-solid fa-chevron-down" })] }) }), _jsx("li", { children: _jsx("a", { href: "", children: "Documentation" }) }), _jsx(Btn, { children: "Login", hrefProp: "https://www.instagram.com/ribeiroo.dev" })] }) }), _jsx(Btn, { children: "Login", hrefProp: "https://www.instagram.com/ribeiroo.dev" }), _jsxs("button", { onClick: handleMenu, className: 'menu-button', children: ["Menu ", _jsx("span", { className: 'hamb-icon' })] }), _jsx("span", { className: 'gradient-header' })] }));
};
export default Header;
