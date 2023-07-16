import * as React from 'react';
import "./index.sass"

interface IButtonProps {
    disabled?:boolean
}

const Button: React.FunctionComponent<React.PropsWithChildren<IButtonProps>> = ({
    disabled = false,
    children
}) => {
  return (
    <button disabled={disabled} className='Button'>
        {children}
    </button>
  );
};

export default Button;
