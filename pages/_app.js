import '../styles/globals.scss'
import { ThemeProvider } from '../context'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
