"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
      {/* Conteúdo */}
      
      <button
        onClick={() => router.push("/pages/coi19sj29")}
        className="fixed bottom-6 mt-[10rem] right-6 md:hidden bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-bounce z-50"
      >
        Cardápio 🍢
      </button>
      <div className="relative mt-[40rem] md:mt-[15rem] flex flex-col items-center">
        {/* Portal e barraca lado a lado */}
        <div className="flex flex-row items-end justify-center gap-8">
          {/* Portal central */}
          <img
            src="/portal.png"
            alt="Portal Arraiá da Família"
            className="w-96 max-w-3xl"
          />
        </div>
      </div>
      
      <div className="absolute esconder-no-celular left-10 mt-[35em]">
        <div className="absolute esconder-no-celular left-10 top-40 w-26 h-26 bg-red-500 rounded-full blur-3xl opacity-100 animate-pulse -z-10">
          {" "}
        </div>{" "}
        <img
          src="/fogueira.gif"
          alt="fogueira"
          className="h-46 max-w-sm mt-36"
        />
      </div>
      <div className="absolute esconder-no-celular right-10 mt-[27rem]">
        <button
          onClick={() => router.push("/pages/coi19sj29")}
          className="absolute mt-80 right-20 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg animate-bounce transition shadow-md"
        >
          Cardápio 🍡
        </button>
        <img src="/barraca.png" alt="barraca" className="h-96 max-w-sm mt-36" />
      </div>
      {/* Chão: grama + terra */}
      <div className="absolute bottom-0 w-full h-24 z-10">
        <div className="h-1/2 bg-green-600 relative overflow-hidden">
          {/* Grama com cortes (simulação de folhas) */}
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
