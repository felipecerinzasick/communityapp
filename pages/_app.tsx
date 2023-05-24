import '../styles/globals.css'
import awsconfig from './aws-exports';

let Amplify;

if (typeof window !== 'undefined') {
  Amplify = require('aws-amplify').default;
  Amplify.configure(awsconfig);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
