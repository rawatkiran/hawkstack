import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hawkstack</title>
        <meta name="description" content="A fully SEO-optimized Next.js app" />
        <meta name="keywords" content="nextjs, seo, nodejs, react" />
        <meta property="og:title" content="My SEO Website" />
        <meta property="og:description" content="A fully SEO-optimized Next.js app"/>
      </Head>

      <main>
        <h1>Welcome to Hawkstack</h1>
      </main>
    </>
  );
}
