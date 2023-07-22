import { jsx as _jsx } from "react/jsx-runtime";
import './btn.scss';
const Btn = (props) => {
    return _jsx("a", { className: 'btn-component btn-component-mobile', href: props.hrefProp, children: props.children });
};
export default Btn;
