"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Input = (props) => {
    const { type, name, value, onChange, placehodlder, errorDiv, errorMsg, className } = props;
    return ((0, jsx_runtime_1.jsx)("input", { type: type, className: `form-control ${className}`, id: name, name: name, defaultValue: value, onChange: onChange, placeholder: placehodlder }));
};
exports.Input = Input;
