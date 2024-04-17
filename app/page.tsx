'use client'
import { QueryClient, QueryClientProvider } from "react-query";
import HeroCardsContainer from "./ui/hero-list/hero-cards-container";

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center bg-slate-200 p-10">
        <h1 className="text-3xl font-bold pb-10 text-center text-slate-900">Starwars Heroes</h1>
        <HeroCardsContainer/>
      </main>
    </QueryClientProvider>
  );
}
