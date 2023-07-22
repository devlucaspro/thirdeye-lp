import { jsx as _jsx } from "react/jsx-runtime";
import './bar.scss';
const Bar = (props) => {
    return _jsx("section", { className: 'bar-header', children: props.inner });
};
export default Bar;
