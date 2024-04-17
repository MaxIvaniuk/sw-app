import { getStarshipById } from '@/app/lib/api';
import React, { useEffect, useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { StarshipNodeData } from '@/app/definitions';
 
const StarshipCustomNode = ({ data }: { data: { id: number } }) => {
    const [starshipInfo, setStarshipInfo] = useState<StarshipNodeData>({
        name: '',
        model: '',
        starship_class: '',
    });
    const [errorData, setErrorData] = useState<string>('')
    const { id } = data;
    useEffect(() => {
        getStarshipById(id)
            .then( res => setStarshipInfo(res.data))
            .catch( err => setErrorData(`Something went wrong with data about this Spaceship. Error code: ${err.code}`))
    }, [])

    const listStyles = 'text-2xl tracking-wide text-yellow-400 mb-3 font-semibold'
    const propStyles = 'text-slate-900 font-normal text-2xl'
 
    return (
        <>
            <Handle type="target" position={Position.Top} id={`ship-${id}`} />
            <div className='flex flex-col rounded-md bg-cyan-600 p-6 min-w-[448px] max-w-[448px]'>
                {
                    !starshipInfo
                    ? <p className='text-2xl tracking-wide text-red-500 text-center font-semibold'>{errorData}</p>
                    : <>
                        <h4 className='text-3xl font-semibold text-yellow-400 mb-6 text-center'>Spaceship</h4>
                        <p className={listStyles}>Name: <br/>
                            <span className={propStyles}>{starshipInfo?.name}</span>
                        </p>
                        <p className={listStyles}>Model: <br/>
                            <span className={propStyles}>{starshipInfo?.model}</span>
                        </p>
                        <p className={listStyles}>Starship class: <br/>
                            <span className={propStyles}>{starshipInfo?.starship_class}</span>
                        </p>
                    </>
                }
            </div>
        </>
    );
}

export default StarshipCustomNode;