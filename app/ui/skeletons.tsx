
export function CardSkeleton() {
  return (
    <div className={`flex flex-col items-center justify-center gap-[30px] relative overflow-hidden rounded-xl bg-gray-500 p-10 shadow-sm min-h-[262px] min-w-[238px]`}>
      <div className="truncate leading-relaxed animate-pulse rounded-xl bg-gray-400 px-4 py-8 w-32 min-h-[118px]"></div>
      <div className="h-7 w-32 leading-relaxed animate-pulse rounded-md bg-gray-400" />
    </div>
  )
}

export function HeroCardsSkeleton() {
  return(
    <>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </>
  )
}
