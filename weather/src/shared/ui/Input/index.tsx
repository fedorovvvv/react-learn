import * as React from "react";
import './index.sass'

interface IInputProps {
    type?: string;
    disabled?:boolean
    value: string
    onInput: React.FormEventHandler<HTMLInputElement>
}

const Input: React.FunctionComponent<IInputProps> = ({ type = 'text', disabled, value, onInput }) => {

    return <input className="Input" type={type} disabled={disabled} value={value} onInput={e => onInput?.(e)}/>;
};

export default Input;
