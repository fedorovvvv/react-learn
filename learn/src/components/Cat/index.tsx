import { CSSProperties, FC, useRef, useState } from 'react';
import Button from '../../shared/ui/Button'
import './index.css'
import catImage from '../../assets/cat.png'
import { random } from 'lodash';
import { Img } from 'react-image';

interface ICatProps {
    disabled?:boolean
}

interface ICat {
    id:number
    top: number
    left: number
    rotate: number
    width: number
    style:CSSProperties
}

const Cat:FC<ICatProps> = ({
    disabled
}) => {

    const ref = useRef<HTMLDivElement>(null)

    const [cats, setCats] = useState<ICat[]>([])

    const catCreate = (customData?:Partial<ICat>):ICat => {
        const width = ref.current?.clientWidth || 0
        const height = ref.current?.clientHeight || 0
        const data:Omit<ICat, 'style'> = {
            id: new Date().getTime(),
            top: random(0, height),
            left: random(0, width),
            rotate: random(0, 360),
            width: random(40, 200),
            ...(customData || undefined)
        }
        const style = {
            "--top": `${data.top}px`,
            "--left": `${data.left}px`,
            "--rotate": `${data.rotate}deg`,
            "--width": `${data.width}px`
        } as CSSProperties
        
        return {
            ...data,
            style
        }
    }

    const handler = {
        buttonClick() {
            setCats([...cats, catCreate()])
        }
    }

    return (
        <div className={`Cat`} ref={ref}>
            {
                cats.map(({style, id}) => 
                    <Img src={catImage} style={style} key={id}/>
                )
            }
            <Button disabled={disabled}  onClick={() => handler.buttonClick()} >Show cat!!!</Button>
        </div>
    );
}

export default Cat;