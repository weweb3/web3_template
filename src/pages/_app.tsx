import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '~/styles/global.css'
import { newQueryClient } from '~/helpers/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(newQueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
