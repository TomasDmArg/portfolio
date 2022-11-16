import '../styles/globals.scss'
import { ThemeProvider } from '../context'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
