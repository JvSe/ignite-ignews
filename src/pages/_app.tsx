import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuxProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';

import '../styles/global.scss';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <NextAuxProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuxProvider>
  )
}

export default MyApp
