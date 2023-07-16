import * as React from 'react';
import './index.sass'

interface ISectionProps {
    title?:string
    className?:string
}

interface ISectionContainerProps {
    className?:string
}

export const SectionContainer:React.FC<React.PropsWithChildren<ISectionContainerProps>> = ({children, className}) => {
    return (
        <div className={`SectionContainer ${className || ''}`}>
            {children}
        </div>
    );
}
 
export default SectionContainer;


export const Section: React.FunctionComponent<React.PropsWithChildren<ISectionProps>> = ({
    title,
    children
}) => {
  return (
    <section className='Section'>
        <SectionContainer className='Section__header'>
            {title ? <h1>{title}</h1> : ''}
        </SectionContainer>
        <div className="Section__main">
            {children}
        </div>
    </section>
  );
};