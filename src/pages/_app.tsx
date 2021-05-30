import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClientOnly } from '../components/ClientOnly';
import React from 'react';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ClientOnly>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ClientOnly>
  );
}
export default MyApp;
