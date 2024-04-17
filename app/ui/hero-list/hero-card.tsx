import React from 'react'
import { UserIcon } from '@heroicons/react/16/solid'
import Link from 'next/link';

interface HeroIntro {
  name: string,
  heroId: number
}

const HeroCard: React.FC<HeroIntro> = ({name, heroId}) => {
  return (
    <div key={heroId} id={heroId.toString()} className='group relative rounded-xl p-10 bg-card text-card-foreground shadow bg-slate-500 min-h-[262px] min-w-[238px] hover:cursor-pointer duration-300 hover:scale-105 hover:duration-300'>
      <UserIcon className='text-slate-300'/>
      <p className='text-center text-slate-100 '>
        {name}
      </p>
      <Link href={`/hero/${heroId}`} className="flex h-full rounded-xl items-center justify-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-400 bg-fixed opacity-0 duration-300 group-hover:opacity-95 group-hover:duration-300">
        <p className="text-white underline text-xl opacity-100 bg-slate-500 rounded-xl px-3.5 py-3">
          See more.
        </p>
      </Link>
    </div>
  )
}

export default HeroCard
