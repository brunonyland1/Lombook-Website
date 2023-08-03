import React from "react";

export default function About() {
  return (
    <section id="sobre" className="relative h-full py-20 sm:py-40 lg:py-60">
      <div className="bg-gradient-to-t from-black via-zinc-950 to-black absolute inset-0 z-[1]" />
      <div className="max-w-7xl relative mx-auto z-[2] px-5">
        <div className="text-center flex flex-col gap-5 ">
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl">
            Descobrindo a Magia das Praias{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400">
              Vulcânicas
            </span>
          </h2>
          <div className="text-white text-xl">
            <p>
              Bem-vindo ao Lombook, onde exploramos as maravilhas das praias
              vulcânicas! Mergulhe em paisagens deslumbrantes e descubra a magia
              desses destinos únicos, desde a origem geológica até as culturas
              que as cercam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
