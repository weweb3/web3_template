import { QueryClient } from 'react-query'

export function newQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minute
        refetchOnWindowFocus: process.env.NODE_ENV !== 'development',
      },
    },
  })
}
