import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuxProvider } from 'next-auth/react';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuxProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuxProvider>
  )
}

export default MyApp
