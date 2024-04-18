import { getStarshipById } from '@/app/lib/api';
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { useQuery } from 'react-query';
 
const StarshipCustomNode = ({ data }: { data: { id: number } }) => {
    const { id } = data;
    const results = useQuery({
        queryKey: ['starshipNode'],
        queryFn: () => getStarshipById(id)
    })
    const { error, isFetching } = results

    const listStyles = 'text-2xl tracking-wide text-yellow-400 mb-3 font-semibold'
    const propStyles = 'text-slate-900 font-normal text-2xl'
 
    return (
        <>
            <Handle type="target" position={Position.Top} id={`ship-${id}`} />
            <div className='flex flex-col rounded-md bg-cyan-600 p-6 min-w-[448px] max-w-[448px]'>
                {
                    error
                    ? <p className='text-2xl tracking-wide text-red-500 text-center font-semibold'>{`Something went wrong with data about this Spaceship. Error code: ${error}`}</p>
                    : isFetching
                        ? <div className='text-3xl font-semibold text-yellow-400'>Loading...</div>
                        :<>
                            <h4 className='text-3xl font-semibold text-yellow-400 mb-6 text-center'>Spaceship</h4>
                            <p className={listStyles}>Name: <br/>
                                <span className={propStyles}>{results.data?.name}</span>
                            </p>
                            <p className={listStyles}>Model: <br/>
                                <span className={propStyles}>{results.data?.model}</span>
                            </p>
                            <p className={listStyles}>Starship class: <br/>
                                <span className={propStyles}>{results.data?.starship_class}</span>
                            </p>
                        </>
                }
            </div>
        </>
    );
}

export default StarshipCustomNode;