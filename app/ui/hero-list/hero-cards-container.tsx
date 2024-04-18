/* eslint-disable */
import React, { useRef, useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useIntersection } from '@mantine/hooks';
import { HeroCardsSkeleton } from '../skeletons';
import { getHeroes } from '@/app/lib/api';
import HeroCard from './hero-card';
import Spinner from '../spinner';
import { Hero } from '@/app/definitions';

const HeroCardsContainer: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery('heroes', getHeroes, {
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.next;
      return nextPage ? new URL(nextPage).searchParams.get('page') : undefined;
    },
  });

  const loadMoreHeroes = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  // infinite scroll logic
  const loadMoreRef = useRef<HTMLElement>(null);

  const { ref, entry } = useIntersection({
    root: loadMoreRef.current,
    rootMargin: "10px",
    threshold: 1,
  });

  useEffect(() => {
    if(entry?.isIntersecting) loadMoreHeroes()
  }, [entry])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-7'>
      {data
        ? (
          <>
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((hero: Hero) => (
                  <div key={hero.id}>
                    <HeroCard name={hero.name} heroId={hero.id} />
                  </div>
                ))}
              </React.Fragment>
            ))}

            <div ref={ref} onClick={() => loadMoreHeroes()} className='p-6 col-span-2 justify-self-center'>
              {
                hasNextPage 
                ? <Spinner/>
                : isFetching 
                    ? <Spinner/>
                    : 'Thats all heroes'
              }
            </div>
          </>
        )
        : <HeroCardsSkeleton />
      }
    </div>
  );
};

export default HeroCardsContainer;
