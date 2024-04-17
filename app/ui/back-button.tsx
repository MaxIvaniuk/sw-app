import Link from 'next/link';
import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

const BackButton = () => {
  return (
    <Link className='p-2 flex flex-row justify-center gap-1.5 items-center bg-slate-400 text-lg duration-300 hover:bg-slate-300' href={'/'}>
        <ArrowLeftIcon className='w-6'/>
        Go back
    </Link>
  )
}

export default BackButton
