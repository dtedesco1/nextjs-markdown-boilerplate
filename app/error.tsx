'use client'

export default function Error({ error, reset }: { error: unknown; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{(error as any)?.message ?? 'Unknown error'}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}