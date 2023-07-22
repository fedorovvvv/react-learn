import * as React from 'react';
import './index.sass'

interface IFieldProps {
    onClick?:VoidFunction
    size?:'s'
    fill?:string
    disabled?:boolean
}

const Field: React.FunctionComponent<IFieldProps> = ({onClick, fill, size, disabled}) => {
  return (
    <div className={`Field ${fill && fill !== ' ' ? `Field_fill` : ''} ${size ? `Field_size-${size}` : ''} ${disabled ? `Field_disabled` : ''}`} onClick={() => onClick?.()}>
        {fill}
    </div>
  );
};

export default Field;
