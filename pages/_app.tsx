import '../styles/globals.css'
import type { AppProps } from 'next/app';
import awsconfig from '../components/aws-exports'; // Note: Update this import path if required.
import React, { useState } from 'react';

let Amplify;

if (typeof window !== 'undefined') {
  Amplify = require('aws-amplify').default;
  Amplify.configure(awsconfig);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
