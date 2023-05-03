import Head from 'next/head';
import React from 'react';

export default function App() {
  return (
    <div className="pt-8 pb-80 sm:pt-12 sm:pb-40 lg:pt-24 lg:pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <Head>
          <title>Temporal + Next.js Example</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </div>
  );
}
