import { getFilmById } from '@/app/lib/api';
import React from 'react';
import { useQuery } from 'react-query';
import { Handle, Position } from 'react-flow-renderer';
 
const MovieCustomNode = ({ data }: { data: { id: number } }) => {
    const { id } = data;
    const results = useQuery({
        queryKey: ['movieNode'],
        queryFn: () => getFilmById(id).then(res => res.data)
    })
    const { error, isFetching } = results

    const listStyles = 'text-2xl tracking-wide text-yellow-400 mb-3 font-semibold'
    const propStyles = 'text-slate-900 font-normal text-2xl'
 
    return (
        <>
            <Handle type="target" position={Position.Top} id={`mov-${id}`} />
            <div className='flex flex-col rounded-md bg-cyan-600 p-6 max-w-md '>
                {
                    error
                    ?  <p className='text-2xl tracking-wide text-red-500 text-center font-semibold'>{`Something went wrong with data about this Movie. Error code: ${error}`}</p>
                    : isFetching 
                        ? <div className='text-3xl font-semibold text-yellow-400'>Loading...</div>
                        :<>
                            <p className='text-3xl font-semibold text-yellow-400 mb-4'>Episode {results.data?.episode_id}.<br/> {results.data?.title}</p>
                            <p className={listStyles}>Producer: <br/>
                                <span className={propStyles}>{results.data?.producer}</span>
                            </p>
                            <p className={listStyles}>Opening Crawl: <br/>
                                <span className={propStyles}>{results.data?.opening_crawl}</span>
                            </p>
                        </>
                }
            </div>
            <Handle type="source" position={Position.Bottom} id={`mov-${id}`} />
        </>
    );
}

export default MovieCustomNode;