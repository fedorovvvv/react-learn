import { PropsWithChildren } from 'react';
import React from 'react';
import './index.css'

interface IButtonEvents {
    onClick:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface IButtonProps {
    disabled?:boolean
}

const Button:React.FC<PropsWithChildren<IButtonProps> & Partial<IButtonEvents>> = ({children, onClick}) => {
    const dispatch = {
        click(e:Parameters<IButtonEvents['onClick']>['0']) {
            onClick?.(e)
        }
    }
    return (
        <>
            <button className="Button" onClick={(e) => dispatch.click(e)}>
                {children}
            </button>
        </>
    );
}

export default Button;