"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Levados() {
  const [levados, setLevados] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/app/api/alimentos")
      .then((res) => res.json())
      .then((data) => {
        setLevados(Array.isArray(data.levados) ? data.levados : []);
      })
      .catch((err) => {
        console.error("Erro ao buscar levados:", err);
        setLevados([]);
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 via-blue-800 to-blue-700 text-white">
      <h1 className="text-3xl font-bold mb-6">Pratos Já Levados 🎉</h1>

      {levados.length === 0 ? (
        <p className="text-lg">Ninguém levou nada ainda... 😥</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {levados.map((item, index) => (
            <li
              key={index}
              className="bg-yellow-100 text-black p-4 rounded shadow-md w-56 h-36 flex items-center justify-center text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => router.back()}
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg"
      >
        Voltar
      </button>
    </main>
  );
}
