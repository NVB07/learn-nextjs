import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/user.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
