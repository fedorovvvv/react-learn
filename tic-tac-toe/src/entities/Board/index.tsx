import * as React from 'react';
import { IField } from '../../shared/types/field';
import Field from '../../shared/ui/Field';

import './index.sass'

interface IBoardProps {
    rows?:IField[][]
    size?:'s'
    disabled?:boolean
    onFieldClick?: (field:IField) => void
}

const Board: React.FunctionComponent<IBoardProps> = ({rows, onFieldClick, size, disabled}) => {
    return (
        <div className={`Board ${size ? `Board_size-${size}` : ''}`}>
            {rows?.flat().map((field) => (
               <Field disabled={disabled} size={size} fill={field.player} key={field.id} onClick={() => onFieldClick?.(field)}/>
            ))}
        </div>
    )
};

export default Board;
