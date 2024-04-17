import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { HeroNode } from '@/app/definitions';

interface HeroCustomNodeProps {
    data: HeroNode;
}
 
const HeroCustomNode: React.FC<HeroCustomNodeProps> = ({ data }) => {
    const { name, height, mass, id, birth_year } = data;
    const listStyles = 'text-3xl text-yellow-400 font-semibold'
    const propStyles = 'text-slate-900 font-normal pl-3'
 
    return (
        <>
            <div className='flex flex-col rounded-md bg-cyan-600 gap-6 p-6 min-w-[448px]'>
                <p className='text-5xl font-semibold text-yellow-400'>
                    {name}
                </p>
                <p className={listStyles}>
                    Birdth: <span className={propStyles}>{birth_year}</span>
                </p>
                <p className={listStyles}>
                    Height: <span className={propStyles}>{height}</span>
                </p>
                <p className={listStyles}>
                    Mass: <span className={propStyles}>{mass}</span>
                </p>
            </div>
            <Handle type="source" position={Position.Bottom} id={id} />
        </>
    );
}

export default HeroCustomNode;