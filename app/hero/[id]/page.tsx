'use client'
import { getHero } from '@/app/lib/api'
import React from 'react'
import { notFound } from 'next/navigation';
import Flow from '@/app/ui/hero-info/hero-flow';
import { QueryClient, QueryClientProvider } from "react-query";
import { generateUserNodes, generateMovieNodes, generateStarshipsNodes, generateHeroMovieEdges, generateMovieShipEdges } from '@/app/lib/flowContent';

export default async function Heropage({ params }: { params: { id: string } }) {
    const { id } = params
    const queryClient = new QueryClient()
    
    const hero = await getHero(id)
    const { name, height, mass, films, starships, birth_year } = hero;

    const nodes = [...generateUserNodes(name, height, mass, id, birth_year), ...generateMovieNodes(films), ...generateStarshipsNodes(starships) ]
    const edges = [...generateHeroMovieEdges(films), ...generateMovieShipEdges(films, starships)]

    if (!hero) {
        notFound();
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Flow nodes={nodes} edges={edges}/>
        </QueryClientProvider>
    )
}
