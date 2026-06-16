import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Tracking from '../components/Tracking'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Tracking />
      <Component {...pageProps} />
    </>
  )
}
