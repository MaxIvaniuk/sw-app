import { getFilmById } from '@/app/lib/api';
import React, { useEffect, useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { MovieNodeData } from '@/app/definitions';
 
const MovieCustomNode = ({ data }: { data: { id: number } }) => {
    const [filmInfo, setFilmInfo] = useState<MovieNodeData>({    
        title: '',
        producer: '',
        episode_id: '',
        opening_crawl: ''}
    );
    const [errorData, setErrorData] = useState<string>('')
    const { id } = data;
    useEffect(() => {
        getFilmById(id)
            .then( res => setFilmInfo(res.data))
            .catch( err => setErrorData(`Something went wrong with data about this Movie. Error code: ${err.code}`))
    }, [])

    const listStyles = 'text-2xl tracking-wide text-yellow-400 mb-3 font-semibold'
    const propStyles = 'text-slate-900 font-normal text-2xl'
 
    return (
        <>
            <Handle type="target" position={Position.Top} id={`mov-${id}`} />
            <div className='flex flex-col rounded-md bg-cyan-600 p-6 max-w-md '>
                {
                    !filmInfo
                    ?  <p className='text-2xl tracking-wide text-red-500 text-center font-semibold'>{errorData}</p>
                    : <>
                        <p className='text-3xl font-semibold text-yellow-400 mb-4'>Episode {filmInfo?.episode_id}.<br/> {filmInfo?.title}</p>
                        <p className={listStyles}>Producer: <br/>
                            <span className={propStyles}>{filmInfo?.producer}</span>
                        </p>
                        <p className={listStyles}>Opening Crawl: <br/>
                            <span className={propStyles}>{filmInfo?.opening_crawl}</span>
                        </p>
                    </>
                }
            </div>
            <Handle type="source" position={Position.Bottom} id={`mov-${id}`} />
        </>
    );
}

export default MovieCustomNode;