import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuxProvider } from 'next-auth/react';
import '../styles/global.scss';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver, repositoryName } from '../../prismicio';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({href, children, ...props}) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <NextAuxProvider session={pageProps.session}>
          <Header />
          <Component {...pageProps} />
        </NextAuxProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
