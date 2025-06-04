"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Comidas() {
  const router = useRouter();
  const [alimentos, setAlimentos] = useState([]);
  const [levados, setLevados] = useState([]);

  useEffect(() => {
    fetch("/api/alimentos")
      .then((res) => res.json())
      .then((data) => {
        setAlimentos(Array.isArray(data.alimentos) ? data.alimentos : []);
        setLevados(Array.isArray(data.levados) ? data.levados : []);
      })
      .catch((err) => {
        console.error("Erro ao buscar alimentos:", err);
        setAlimentos([]);
        setLevados([]);
      });
  }, []);

  const handleLevar = async (item) => {
    await fetch("/api/levar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    });

    const res = await fetch("/api/alimentos");
    const data = await res.json();
    setAlimentos(data.alimentos);
    setLevados(data.levados);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* nuvens */}
      <img src="/nuvens.png" alt="" className="esconder-no-celular mt-22" />
      {/* Bandeirinhas */}
      <div className="absolute top-0 left-0 w-full  flex justify-center mt-6 z-10 ">
        <img
          src="/baloes.png"
          alt="balões"
          className="w-full absolute max-w-4xl h-76 mt-86 object-contain"
        />
        <div className="flex absolute top-[30rem] justify-center">
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
          <img src="/bandeira.png" alt="" className=" w-50 h-40" />
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
          <img src="/bandeira.png" alt="" className=" w-56 h-40" />
        </div>
      </div>
      {/* Céu ao pôr do sol */}
      <div className="absolute min-h-screen inset-0 bg-gradient-to-b from-blue-950 via-blue-800 to-blue-700 -z-10" />
      {/* Sol */}
      <div className="absolute top-20 right-20 w-30 h-30 bg-yellow-200 rounded-full blur-5xl opacity-100 animate-pulse -z-10">
        {" "}
        <img src="/lua.png" alt="" />{" "}
      </div>
      <div className="absolute top-20 right-20 w-30 h-30 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>
      {/* Estrela */}
      {/* left */}
      <div className="absolute top-50 left-82 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute top-50 left-82 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-80 left-72 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-80 left-72 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-20 left-12 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-20 left-12 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-70 left-42 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-70 left-42 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-90 left-22 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-90 left-22 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-10 left-42 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-10 left-42 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-40 left-36 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-40 left-36 w-10 h-10"
      />
      <div className="absolute esconder-no-celular top-30 left-96 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute esconder-no-celular top-30 left-96 w-10 h-10"
      />
      {/* right */}
      <div className="absolute top-10 right-70 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute top-10 right-70 w-10 h-10"
      />
      <div className="absolute top-70 right-56 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute top-70 right-56 w-10 h-10"
      />
      <div className="absolute top-40 right-76 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute top-40 right-76 w-10 h-10"
      />
      <div className="absolute top-70 right-16 w-10 h-10 bg-yellow-200 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
        {" "}
      </div>{" "}
      <img
        src="/estrela.png"
        alt=""
        className="absolute top-70 right-16 w-10 h-10"
      />
      <button
        onClick={() => router.push("/pages/fstsjaksi")}
        className="fixed bottom-6 mt-[10rem] right-6 md:hidden bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-bounce z-50"
      >
        Voltar
      </button>
      <div className="lg:mt-[15rem] mt-[15rem] h-full my-[10rem]  lg:h-[60rem] lg:m-48">
        <h1 className="text-2xl lg:text-3xl mt-[25rem] text-white lg:mt-0 font-bold mb-6">
          Conto com a colaboração de ocês
        </h1>
        <button
        onClick={() => router.push("/pages/levados")}
        className="fixed bottom-20 right-6 md:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg z-50"
      >
        Ver Pratos Levados
      </button>
        <ul className="grid grid-cols-2 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(alimentos) &&
            alimentos.map((item) => (
              <li
                key={item}
                className="bg-yellow-100  w-46 mx-2 p-4 grid grid-cols-1 rounded-md shadow-md h-36 items-center"
              >
                <span className="text-black">{item}</span>
                <button
                  disabled={item !== "Prato típico" && levados.includes(item)}
                  onClick={() => handleLevar(item)}
                  className={`px-4 py-2 rounded ${
                    item !== "Prato típico" && levados.includes(item)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {item === "Prato típico"
                    ? "Vou Levar"
                    : levados.includes(item)
                    ? "Já foi"
                    : "Vou Levar"}
                </button>
              </li>
            ))}
        </ul>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 z-10">
        <div className="h-1/2 bg-green-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full flex justify-between">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-[4px] h-[10px] bg-green-700 rotate-[25deg] animate-bounce transition origin-bottom"
              />
              //               style={{
              //   transform: `rotate(${Math.random() * 20 - 10}deg)`
              // }}
            ))}
          </div>
        </div>
        <div className="h-1/2 bg-[#8B4513]" />
      </div>
    </main>
  );
}
