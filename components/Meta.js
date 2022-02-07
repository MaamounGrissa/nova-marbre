import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      <title>Nova Marbre</title>
      <meta name="description" content="Nova Marbre" />
      <meta name="keywords" content="nova, marbre" />
      <meta property="og:image" content="/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
  )
}