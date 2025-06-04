// pages/bloqueado.js

import Head from 'next/head';

export default function Bloqueado() {
  return (
    <>
      <Head>
        <title>Acesso Bloqueado</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">🚫 Acesso Bloqueado</h1>
        <p className="text-lg mb-6">
          Você não tem permissão para acessar esta página.
        </p>
      </div>
    </>
  );
}
