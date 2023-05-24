import '../styles/globals.css'
import type { AppProps } from 'next/app';
import awsconfig from './aws-exports'; // Note: Update this import path if required.
import Amplify from "@aws-amplify/core";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
